import {Request, Response, NextFunction} from 'express'
import supabase from '../db'
import { DatabaseUser } from '../types'
import { User } from '@supabase/supabase-js';

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