//this is just for docs didnt use any orm or migrations(tight deadline will do later)

export const TABLES = {
    users:{
        id: 'UUID PRIMARY KEY', //supabase id
        email:'TEXT UNIQUE NOT NULL',
        role:'TEXT CHECK (role IN ("creator", "editor" ))',
        youtube_channel_id: 'TEXT',
        youtube_access_token: 'TEXT',
        youtube_refresh_token: 'TEXT',
        created_at: 'TIMESTAMP DEFAULT NOW()'
    },

    workspaces:{
        id: 'UUID PRIMARY KEY DEFAULT gen_random_uuid()',
        name:'TEXT NOT NULL',
        creator_id:'UUID REFERENCES users(id)',
        created_at: 'TIMESTAMP DEFAULT NOW()'
    },

    workspace_members:{
        workspace_id:'UUID REFERENCES workspaces(id)',
        user_id:'UUID REFERENCES users(id)',
        joined_at: 'TIMESTAMP DEFAULT NOW()',
        'PRIMARY KEY': '(workspace_id, user_id)'
    },

    submissions:{
        id: 'UUID PRIMARY KEY DEFAULT gen_random_uuid()',
        workspace_id:'UUID REFERENCES workspaces(id)',
        uploader_id:'UUID REFERENCES users(id)',
        title: 'TEXT NOT NULL',
        description: 'TEXT',
        video_url: 'TEXT NOT NULL',
        thumbnail_url: 'TEXT NOT NULL',
        original_video_filename: 'TEXT',
        original_thumbnail_filename: 'TEXT',
        youtube_video_id: 'TEXT', 
        upload_status: 'TEXT DEFAULT \'pending\' CHECK (upload_status IN (\'pending\', \'uploading\', \'uploaded\', \'failed\'))',
        status: 'TEXT DEFAULT \'pending\'CHECK (status IN (\'pending\', \'approved\', \'rejected\'))',
        submitted_at: 'TIMESTAMP DEFAULT NOW()',
        approved_at: 'TIMESTAMP',
        uploaded_to_youtube_at: 'TIMESTAMP'
    }
}