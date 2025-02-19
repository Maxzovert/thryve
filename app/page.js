"use client"
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () =>{
    router.replace('/dashboard')
  }
  return (
<div>
  <h2>Hellooow</h2>
  <Button onClick={handleClick}>Submit</Button>
  <UserButton/>
</div>
  );
}
