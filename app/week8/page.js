"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleGitHubSignIn = async () => {
    await gitHubSignIn();
  }

  const handleFirebaseSignOut = async () => {
    await firebaseSignOut();
  }



  return (
    <main className="bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500">
        <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
        <div className="text-lg">
        {!user && (
          <button className="ml-4" onClick={handleGitHubSignIn}>Sign in with GitHub</button>
        )}
        {user && (
          <div>
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>
            <Link className="text-lg hover:underline" href="./week8/shopping-list">Shopping List</Link>
            <div>
          <button className="text-lg hover:underline" onClick={handleFirebaseSignOut}>Sign out</button>
          </div>
          </div>
        )}

      </div>
    </main>
  );
}