"use server";

import { redirect } from "next/navigation";
import { checkIsAuthenticated } from "./checkIsAuthenticated";
import { handleGoogleSignIn } from "./handleGoogleSignIn";

export default async function handleSignIn() {
    const isAuthenticated = await checkIsAuthenticated();
    if (!isAuthenticated) {
        await handleGoogleSignIn();
    }
    redirect("/generate-email");
}