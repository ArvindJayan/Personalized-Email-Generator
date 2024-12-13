"use server";

import { auth } from "../lib/auth/authConfig";
import prisma from "../modules/db";

export default async function generateEmail(formData: FormData) {
    const lead = formData.get('lead') as string;
    const product = formData.get('product') as string;
    const session = await auth()
    const userId = session?.user?.id;
    if (!userId) return null;

    if (!session?.user) return null
    if ((!lead) || (!product)) {
        return { error: "Enter Lead and Product details to generate the email." };
    }
    try {
        const existingLead = await prisma.lead.findFirst({
            where: { desc: lead, belongsToId: userId }
        });
        if (!existingLead) {
            await prisma.lead.create({
                data: {
                    desc: lead,
                    belongsToId: userId
                }
            });
            console.log("Lead created.");
        } else {
            console.log("Lead already exists");
        }

        const existingProduct = await prisma.product.findFirst({
            where: { desc: product, belongsToId: userId }
        });
        if (!existingProduct) {
            await prisma.product.create({
                data: {
                    desc: product,
                    belongsToId: userId
                }
            });
            console.log("Product created.");
        } else {
            console.log("Product already exists.");
        }

        const prompt = `Write a personalized email based on ${lead}, introducing them to our new product: ${product}. 
    Highlight the key benefits and features that would be relevant to the lead. 
    Make sure the tone is professional but friendly, and include a call to action for a follow-up meeting or demo.
    Give only the final output email along with the subject as Markdown Text without any additional prompt text. Points are welcome but avoid bold text.`;

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "meta-llama/llama-3.1-70b-instruct:free",
                "messages": [
                    {
                        "role": "user",
                        "content": prompt
                    }
                ]
            })
        });

        const data = await response.json() as { choices: { message: { content: string } }[] };
        if (!data.choices || data.choices.length === 0) {
            return { error: "Failed to generate email. Kindly try again." };
        }
        console.log(data);
        return { content: data.choices[0].message.content };
    } catch (error) {
        console.error(error);
        return { error: "Failed to generate email. Kindly try again." };
    } finally {
        await prisma.$disconnect();
    }
}
