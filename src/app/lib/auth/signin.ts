"use server";

import { redirect } from "next/navigation";
import { signIn } from "./authConfig";
import { checkIsAuthenticated } from "./checkIsAuthenticated";

export default async function handleSignIn() {
    const isAuthenticated = await checkIsAuthenticated();
    if (!isAuthenticated) {
        try {
            await signIn("google", { redirectTo: "/generate-email" });
        } catch (e) {
            throw e;
        }
    }
    redirect("/generate-email");
}