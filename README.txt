GET /health
- Returns: "OK"

GET /api/workspaces  
- Returns: [workspaces]

GET /api/workspaces/:id
- Returns: [{id, name, creator_id, submissions[]}]

POST /api/workspaces/:id
- Body: {submission: {id, title, description, video_url, thumbnail_url, by}}
- Returns: {message, workspace}

POST /api/workspaces/:workspaceId/submissions/:submissionId/approve
- Returns: {message, submission}

POST /api/workspaces/:workspaceId/submissions/:submissionId/reject  
- Returns: {message, submission}

Think of your product flow backwards from the money:

YouTuber pays you → needs approval system working
Approval system → needs submissions to approve
Submissions → need workspace to belong to
Workspace → needs users who can create it