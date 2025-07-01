import { Router } from 'express';
import {Request, Response} from 'express'
import type { users as User,  workspaces as Workspace } from '../generated/prisma/client';;
import {db} from '../db'

const router = Router();

interface WorkspaceRequest extends Request {
    user?:User
}

// GET all workspaces
router.get('/', async (req:WorkspaceRequest, res:Response<Workspace[]>) => {
    const user = req.user!

    const workspaces = await db.workspaces.findMany({
        where:{
            OR:[
                { creator_id: user.id },
                {workspace_memebers:{some:{user_id:user.id}}}
            ]
        }
    })
  res.status(200).json(workspaces);
});

// // POST a submission to a workspace
// router.post('/:id', (req, res) => {
//     const {id} = req.params as {id:string}

//     const {submission} = req.body as {submission:Submission}

//     const workspace = workspaces.find(w => w.id == req.params.id);
//     if (!workspace) return res.status(404).json({ message: 'Workspace not found' });

//     workspace.s.push(submission);
//     res.status(200).json({ message: 'Submission added', workspace });
// });

// // Approve a submission
// router.post('/:workspaceId/submissions/:submissionId/approve', (req, res) => {
//   const workspace = workspaces.find(w => w.id == req.params.workspaceId);
//   if (!workspace) return res.status(404).json({ error: 'Workspace not found' });

//   const submission = workspace.submissions.find(s => s.id == req.params.submissionId);
//   if (!submission) return res.status(404).json({ error: 'Submission not found' });

//   submission.status = 'approved';
//   submission.approved_at = Date.now().toString();
//   res.json({ message: 'Submission approved', submission });
// });

// // Reject a submission
// router.post('/:workspaceId/submissions/:submissionId/reject', (req, res) => {
//   const workspace = workspaces.find(w => w.id == req.params.workspaceId);
//   if (!workspace) return res.status(404).json({ error: 'Workspace not found' });

//   const submission = workspace.submissions.find(s => s.id == req.params.submissionId);
//   if (!submission) return res.status(404).json({ error: 'Submission not found' });

//   submission.status = 'rejected';
//   submission.rejected_at = Date.now().toString();
//   res.json({ message: 'Submission rejected', submission });
// });

export default router;
