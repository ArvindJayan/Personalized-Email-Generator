"use server";

import { signOut } from "./authConfig";

export const handleSignOut = async () => {
    try {
        await signOut({
            redirect: true,
            redirectTo: "/",
        });
    } catch (error) {
        throw error;
    }
};
