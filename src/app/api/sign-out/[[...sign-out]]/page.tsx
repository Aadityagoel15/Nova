'use client';
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Page() {
  const { signOut } = useClerk();
  const router = useRouter();

  useEffect(() => {
    const handleSignOut = async () => {
      await signOut();
      router.push("/");
    };

    handleSignOut();
  }, [signOut, router]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <p>Signing out...</p>
    </div>
  );
}
