
import { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = getAuth(req);

    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const leads = await prisma.lead.findMany({
            where: { userId },
        });
        res.status(200).json(leads);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch leads' });
    }
}