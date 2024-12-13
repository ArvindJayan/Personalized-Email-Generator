"use server";

import prisma from "../../modules/db";
import { auth } from "./authConfig";

export async function getProducts() {
    const session = await auth();
    if (!session || !session.user) {
        throw new Error("Not authenticated");
    }

    const products = await prisma.product.findMany({
        where: {
            belongsToId: session.user.id
        }
    });
    return products;
}