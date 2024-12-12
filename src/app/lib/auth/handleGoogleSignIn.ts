"use server";

import { signIn } from "./authConfig";

export const handleGoogleSignIn = async () => {
    try {
        await signIn("google", { redirectTo: "/generate-email" });
    } catch (e) {
        throw e;
    }
};
