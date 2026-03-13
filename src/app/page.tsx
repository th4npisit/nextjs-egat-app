import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Button variant="outline">Hello</Button>
    </div>
  );
}
