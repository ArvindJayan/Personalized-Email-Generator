import { handleGoogleSignIn } from "@/app/lib/auth/handleGoogleSignIn";
import { redirect } from "next/navigation";
import { checkIsAuthenticated } from "../../lib/auth/checkIsAuthenticated";

const SignIn = async () => {
    const isAuthenticated = await checkIsAuthenticated();

    if (!isAuthenticated) {
        await handleGoogleSignIn();
    }
    redirect("/generate-email");
}
export default SignIn;