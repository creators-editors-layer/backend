const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = 3000;

//temporary stores for testing 
const workspaces = [{
    id: 1, 
    name: 'Test Workspace', 
    creator_id: 'user123', 
    submissions: [
        {id: 1, title: 'Sample Edit 1', status: 'pending', video_url: 'https://example.com/1.mp4', by: 'editor1'},
        {id: 2, title: 'Sample Edit 2', status: 'pending', video_url: 'https://example.com/2.mp4', by: 'editor2'}
    ]
}]

// Enable CORS for all origins (adjust for production)
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

//we need workspaces
app.get('/api/workspaces', async(req, res)=>{
    try{

        res.status(200).json(workspaces)

    }catch(error){
        res.status(500).json({error:error.message})
    }
})

//upload to a workspace
app.post('/api/workspaces/:id', async(req, res)=> {
    try{
        const reqId = req.params.id
        const {submission} = req.body //{ submission: {id:1 ,title: 'My Edit',description:'Hello world',video_url:'https://s3.xyz', thubmnil_url:'https://s3.xyz', by: 'user456' } }
        const workspace = workspaces.find(space => space.id == reqId)
        if (!workspace){
            res.status(404).json({message:"workspace not found"})
            return 
        }
        workspace.submissions.push(submission)
        return res.status(200).json({ message: 'Added submission', workspace });
    }catch(error){
        res.status(500).json({error:error.message})
    }
} )

//approve an edit endpoint
app.post('/api/workspaces/:workspaceId/submissions/:submissionId/approve', (req, res)=> {
    try{
        const workspaceId = req.params.workspaceId
        const submissionId = req.params.submissionId

        //check if workspace exist and get workspace
        const workspace = workspaces.find(w => w.id == workspaceId)
        if (!workspace) {
            return res.status(404).json({error: 'Workspace not found'});
        }

        //check if submissionId exists and add approve status to it
        const submission = workspace.submissions.find(s => s.id  == submissionId)
        if (!submission) {
            return res.status(404).json({error: 'Submission not found'});
        }

        submission.status = "approved"
        submission.approved_at = Date.now().toString()

         res.json({message: 'Submission approved', submission});
    }catch(error){
        res.status(500).json({error:error.message})
    }
})
//reject an endpoint
app.post('/api/workspaces/:workspaceId/submissions/:submissionId/reject', (req, res)=> {
    try{
        const workspaceId = req.params.workspaceId
        const submissionId = req.params.submissionId

        //check if workspace exist and get workspace
        const workspace = workspaces.find(w => w.id == workspaceId)
        if (!workspace) {
            return res.status(404).json({error: 'Workspace not found'});
        }

        //check if submissionId exists and add approve status to it
        const submission = workspace.submissions.find(s => s.id  == submissionId)
        if (!submission) {
            return res.status(404).json({error: 'Submission not found'});
        }

        submission.status = "rejected"
        submission.rejected_at = Date.now().toString()

         res.json({message: 'Submission rejected', submission});
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});