"use server";

import prisma from "../../modules/db";
import { auth } from "./authConfig";

export async function getLeads() {
    const session = await auth();
    if (!session || !session.user) {
        throw new Error("Not authenticated");
    }

    const leads = await prisma.lead.findMany({
        where: {
            belongsToId: session.user.id
        }
    });
    return leads;
}