import { NextApiRequest, NextApiResponse  } from "next";
import serverAuth from '@/lib/serverAuth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET') {
        return res.status(405).end();
    }

    try{
        const {currentUser} = await serverAuth(req);

        return res.status(200).json(currentUser);
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}