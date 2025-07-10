export interface DatabaseUser {
  id: string;
  email: string;
  role: 'creator' | 'editor';
  youtube_channel_id?: string;
  youtube_access_token?: string;
  youtube_refresh_token?: string;
  created_at: string;
}

export interface Workspace {
  id: string;
  name: string;
  creator_id: string;
  created_at: string;
}

export interface Submission {
  id: string;
  workspace_id: string;
  uploader_id: string;
  title: string;
  description?: string;
  video_url: string;
  thumbnail_url: string;
  youtube_video_id?: string;
  upload_status: 'pending' | 'uploading' | 'uploaded' | 'failed';
  status: 'pending' | 'approved' | 'rejected';
  submitted_at: string;
  approved_at?: string;
  uploaded_to_youtube_at?: string;
}