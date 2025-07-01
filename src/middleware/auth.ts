import {Request, Response, NextFunction} from 'express'
import { createClient } from '@supabase/supabase-js'
import { DatabaseUser } from '../types'
import { User } from '@supabase/supabase-js';
import dotenv from 'dotenv'

dotenv.config()

const PROJECT_URL = process.env.SUPABASE_URL!
const ANON_KEY = process.env.SUPABASE_ANON_KEY!

const supabase = createClient(PROJECT_URL, ANON_KEY)

interface AuthRequest extends Request {
    user?:User
}

async function auth(req:AuthRequest, res:Response, next:NextFunction){
    //check header
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
            return res.status(401).json({ error: 'No authorization token provided.' });
    }
    
    try{

         //get user from supabase
        const { data: { user }, error } = await supabase.auth.getUser(token);

        //get database user info
        if (error || !user) {
                return res.status(401).json({ error: 'Invalid or expired token.' });
            }

        req.user = user; 
        next(); 
    }catch(error){
        console.error('Auth middleware error:', error);
        return res.status(500).json({ error: 'Internal server error during authentication.' });
    }




}