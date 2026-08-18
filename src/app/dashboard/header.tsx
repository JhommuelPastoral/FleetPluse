"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";
import { Skeleton } from "@/components/ui/skeleton"
export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState<string | null>(null);
  useEffect(() => {
    const supabase = createClient();
    const getUser = async () => {
      const {data: { user }} = await supabase.auth.getUser();
      setUser(user);
      const initialName = user?.user_metadata.full_name.split(" ")[0].charAt(0).toUpperCase() + user?.user_metadata.full_name.split(" ")[0].slice(1);
      setName(initialName);
    };

    getUser();
  }, []);

  if(!user){
    return (
      <header className="space-y-2">
        <Skeleton className="h-8 w-200 bg-neutral-300 rounded-full"/>
        <Skeleton className="h-6 w-100 bg-neutral-300 rounded-full"/>
      </header>
    );
  }

  return (
    <header className="space-y-1">
      <h1 className="text-2xl font-bold">Welcome back, {name}👋</h1>
      <p className="text-muted-foreground text-sm">Here&apos;s what&apos;s happening with your fleet.</p>
    </header>
  );
}