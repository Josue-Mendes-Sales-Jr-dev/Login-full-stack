import { NextApiRequest, NextApiResponse } from 'next';
import {cadastro} from '../../services/user';

export default function handler(
    req:NextApiRequest,
    res:NextApiResponse){
    try{
        const newUser=cadastro(req.body);
        res.status(201).json(newUser);
    }
    catch(err:any){
        res.status(400).json(err.message);
};

};