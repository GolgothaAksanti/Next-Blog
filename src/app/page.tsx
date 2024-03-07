import FilteredBlogs from "@/components/FilteredBlogs";
import Header from "@/components/Header";
import OtherBlogs from "@/components/OtherBlogs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-14">
     <Header />
     <FilteredBlogs />
     <OtherBlogs />
    </main>
  );
}
