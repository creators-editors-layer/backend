import { Router } from 'express';
import {Request, Response} from 'express'
import type { users as User, workspaces as Workspace } from '../prisma/client.js';
import {db} from '../db/index.js'



const router = Router();

interface WorkspaceRequest extends Request {
    user?:User
}

//create workspace -> get workspace by id -> get submissions of a workspace -> 

// GET all workspaces
router.get('/', async (req:WorkspaceRequest, res:any) => {
    const user = req.user!

    const workspaces = await db.workspaces.findMany({
        where:{
            OR:[
                { creator_id: user.id },
                {workspace_members:{some:{user_id:user.id}}}
            ]
        }
    })

    res.status(200).json(workspaces);
});

//create a workspace
router.post('/', async (req:Request, res:any) => {
    const user = req.user!
    const {name, channel_id} = req.body

    const exits = await db.workspaces.findFirst({
        where:{
                name,
                creator_id: user.id,
        }
    })

    if (exits){
        return res.status(409).json({success:false, error:{message: "the workspace name already exists, try another name"}});
    }

    const workspace = await db.workspaces.create({
        data:{
            name,
            creator_id:user.id,
            youtube_channel_id:channel_id
        }
    })
  return res.status(201).json({ success: true, data: workspace });
});

//get submission from workspace a specific workspace
router.get('/:id/submissions', async(req:Request, res:any)=>{
    const user = req.user!
    const { id } = req.params

    //check if the user has access
    const hasAccess = await db.workspaces.findFirst({
        where:{
            id,
            OR:[
                {creator_id:user.id},
                {workspace_members:{some:{user_id:user.id}}}
            ]
        }
    })

    if (!hasAccess) {
     res.status(403).json({ error: 'Access denied: Not a member of this workspace.' });
     return
    }

    //check if the user belongs to a workspace and return all submissions
    const submissions = await db.submissions.findMany({
        where:{ workspace_id:id },
        orderBy:{submitted_at:'desc'}
    })

    

    return res.status(200).json({ success: true, data: submissions })

})

router.get('/:workspaceId/submissions/:submissionId', async(req:Request, res:any)=>{
    const user = req.user!
    const { workspaceId, submissionId } = req.params

    //check if the user has access
    const hasAccess = await db.workspaces.findFirst({
        where:{
            id:workspaceId,
            OR:[
                {creator_id:user.id},
                {workspace_members:{some:{user_id:user.id}}}
            ]
        }
    })

    if (!hasAccess) {
     res.status(403).json({ error: 'Access denied: Not a member of this workspace.' });
     return
    }

    const submission = await db.submissions.findFirst({
        where:{
            id:submissionId,
            workspace_id:workspaceId
        }
    })

    if (!submission) {
        return res.status(404).json({ success: false, error: 'Submission not found' })
    }

    return res.status(201).json({ success: true, data: submission });

})

router.post('/:workspaceId/submissions', async(req:Request, res:any)=>{
    const user = req.user!
    const { workspaceId } = req.params
    const {title, description, video_url, thumbnail_url} = req.body

    //check if the user has access
    const hasAccess = await db.workspaces.findFirst({
        where:{
            id:workspaceId,
            OR:[
                {creator_id:user.id},
                {workspace_members:{some:{user_id:user.id}}}
            ]
        }
    })

    if (!hasAccess) {
     res.status(403).json({ error: 'Access denied: Not a member of this workspace.' });
     return
    }

    //create a submission
    const submission = await db.submissions.create({
        data: {
            workspace_id: workspaceId,
            uploader_id: user.id,
            title,
            description,
            video_url,
            thumbnail_url,
            status: 'pending'
        }
    })

    res.status(201).json({success:true, data:submission})
})

router.post('/workspaces/:workspaceId/submissions/:submissionId/approve', async(req:Request,res:any)=>{
    const user = req.user!
    const { workspaceId, submissionId } = req.params

    //check if the user has access
    const hasAccess = await db.workspaces.findFirst({
        where:{
            id:workspaceId,
            OR:[
                {creator_id:user.id}
            ]
        }
    })

    if (!hasAccess) {
        res.status(403).json({ error: 'Access denied: Not the owner of this workspace.' });
        return
    }

    const updated = await db.submissions.update({
            where:{id:submissionId},
            data:{
                status:"approved"
            }
        })

        return res.status(200).json({ success: true, data: updated });
})


router.post('/workspaces/:workspaceId/submissions/:submissionId/reject', async(req:Request,res:any)=>{
    const user = req.user!
    const { workspaceId, submissionId } = req.params

    //check if the user has access
    const hasAccess = await db.workspaces.findFirst({
        where:{
            id:workspaceId,
            OR:[
                {creator_id:user.id}
            ]
        }
    })

    if (!hasAccess) {
        res.status(403).json({ error: 'Access denied: Not the owner of this workspace.' });
        return
    }

    const updated = await db.submissions.update({
            where:{id:submissionId},
            data:{
                status:"rejected"
            }
        })

        return res.status(200).json({ success: true, data: updated });
})

// Search users by email
router.get('/:workspaceId/search-users', async(req:Request, res:any)=>{
    const user = req.user!
    const { workspaceId } = req.params
    const { email } = req.query

    // Check if user has access to workspace
    const hasAccess = await db.workspaces.findFirst({
        where:{
            id:workspaceId,
            OR:[
                {creator_id:user.id},
                {workspace_members:{some:{user_id:user.id}}}
            ]
        }
    })

    if (!hasAccess) {
        return res.status(403).json({ error: 'Access denied: Not a member of this workspace.' });
    }

    // Search user by email
    const foundUser = await db.users.findFirst({
        where:{
            email: email as string
        },
        select:{
            id: true,
            email: true,
            name: true
        }
    })

    if (!foundUser) {
        return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json({ success: true, data: foundUser });
})

// Add editor to workspace
router.post('/:workspaceId/add', async(req:Request, res:any)=>{
    const user = req.user!
    const { workspaceId } = req.params
    const { userId } = req.body

    // Check if user is workspace owner
    const isOwner = await db.workspaces.findFirst({
        where:{
            id:workspaceId,
            creator_id:user.id
        }
    })

    if (!isOwner) {
        return res.status(403).json({ error: 'Access denied: Only workspace owner can invite editors.' });
    }

    // Check if user is already a member
    const isMember = await db.workspace_members.findFirst({
        where:{
            workspace_id:workspaceId,
            user_id:userId
        }
    })

    if (isMember) {
        return res.status(409).json({ error: 'User is already a member of this workspace.' });
    }

    // Add user to workspace
    await db.workspace_members.create({
        data:{
            workspace_id:workspaceId,
            user_id:userId
        }
    })

    return res.status(200).json({ success: true, message: 'User added to workspace successfully.' });
})

// Remove editor from workspace
router.delete('/:workspaceId/remove', async(req:Request, res:any)=>{
    const user = req.user!
    const { workspaceId } = req.params
    const { userId } = req.body

    // Check if user is workspace owner
    const isOwner = await db.workspaces.findFirst({
        where:{
            id:workspaceId,
            creator_id:user.id
        }
    })

    if (!isOwner) {
        return res.status(403).json({ error: 'Access denied: Only workspace owner can remove editors.' });
    }

    // Remove user from workspace
    await db.workspace_members.deleteMany({
        where:{
            workspace_id:workspaceId,
            user_id:userId
        }
    })

    return res.status(200).json({ success: true, message: 'User removed from workspace successfully.' });
})



// Get all members of a workspace
router.get('/:workspaceId/members', async(req:Request, res:any)=>{
    const user = req.user!
    const { workspaceId } = req.params

    // Check if user has access to workspace
    const hasAccess = await db.workspaces.findFirst({
        where:{
            id:workspaceId,
            OR:[
                {creator_id:user.id},
                {workspace_members:{some:{user_id:user.id}}}
            ]
        }
    })

    if (!hasAccess) {
        return res.status(403).json({ error: 'Access denied: Not a member of this workspace.' });
    }

    const members = await db.workspace_members.findMany({
        where:{
            workspace_id:workspaceId
        },
        include:{
            users:{
                select:{
                    id:true,
                    email:true,
                    name:true
                }
            }
        }
    })

    const workspaceUsers = members.map(member => member.users);

    return res.status(200).json({ success: true, data: workspaceUsers });
})

export default router;
