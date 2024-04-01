'use client'
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-5 inset-x-2 md:max-w-2xl mx-auto z-50 justify-between", className)}
      >
        <div>

       
        <Menu setActive={setActive} >
          <Link
          href="/"
          >
        <Image
        src="/Images/homeImage.png"
        alt="home"
        width={32}
        height={24}
        className="cursor-pointer"
        />
          </Link>
          <Link href="/projects">
          <MenuItem setActive={setActive} active={active} item="Projects">
          
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Portfolio"
                href="/vercelclone"
                src="/Images/vercelimg.png"
                description="3D portfolio made with ThreeJS and React"
              />
              <ProductItem
                title="3D-MultiWindow Screen"
                href="https://algochurn.com"
               src=""
                description="Using ThreeJS and Local storage connecting multiple tab windows."
              />
              <ProductItem
                title="MultiType OrderBook"
                href="https://tailwindmasterkit.com"
               src=""
                description="Asks and Bids level Orderbook to support multiType in C++ "
              />
              <ProductItem
                title="Repl-It"
                href="https://gomoonbeam.com"
                src=""
                description="A monolith of longrunning web based code editor scaled with docker and kubernetes."
              />
            </div>
          </MenuItem>
          </Link>
          <Link href="/blogs"> 
          <MenuItem setActive={setActive} active={active} item="Blogs">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Make your own GIT"
                href="/vercelclone"
                src=""
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="AWS Leaky-Buckets"
                href="https://algochurn.com"
               src=""
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Oracle Database-Hacking"
                href="https://tailwindmasterkit.com"
               src=""
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Redis Implementation"
                href="https://gomoonbeam.com"
                src=""
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
            </div>
          </MenuItem>
          </Link>
          <Link href="/services">
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="PDF-Chat"
                href="/vercelclone"
                src=""
                description="Prepare for tech interviews like never before."
              />
             
              <ProductItem
                title="Automation SAAS"
                href="https://tailwindmasterkit.com"
               src=""
                description="Production ready Tailwind css components for your next project"
              />
             
            </div>
          </MenuItem>
          </Link>
          <div className="flex items-center" >
          <ModeToggle/>
          </div>
          
        </Menu>
        </div>
      </div>
    );
  }
  
  