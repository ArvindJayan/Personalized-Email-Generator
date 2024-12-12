import { SignInButton } from "./components/signin-button";
import "./globals.css";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Personalized Email Generator</h1>
        <p className="text-gray-600 mb-6 mt-10">
          Welcome to the Personalized Email Generator! Our tool helps you create customized emails quickly and easily.
        </p>
        <p className="text-gray-600 mb-6">
          Simply provide the lead and product details, and our generator will craft a personalized email for you.
        </p>
        <div className="flex justify-center">
          <SignInButton />
        </div>
      </div>
    </main>
  );
}