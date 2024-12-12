
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { leadDescription, productDescription } = req.body;

        // Logic to generate email based on lead and product descriptions
        const generatedEmail = `Email content based on ${leadDescription} and ${productDescription}`;

        res.status(200).json({ email: generatedEmail });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}