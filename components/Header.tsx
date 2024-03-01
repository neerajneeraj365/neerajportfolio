"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex mx-5 h-28 text-lg justify-between items-center md:mx-10 sticky top-0">
      <div className="block md:hidden font-bold">
        <Link href="/">NN.</Link>
      </div>
      <div className="hidden md:block">
        <Link href="/" className="cursor-pointer hover:text-gray-400">
          Neeraj Neeraj
        </Link>
      </div>
      {/* For Mobile */}
      <div className="block md:hidden ">
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent>
            <div className="flex justify-center items-center h-full text-center text-2xl font-light text-gray-400">
              <ul className="flex flex-col gap-10">
                <li>
                  <Link
                    href="/"
                    className={cn("") + pathname == "/" ? "text-black" : ""}
                  >
                    Work
                  </Link>
                  <hr />
                </li>
                <li>
                  <Link
                    href="/about"
                    className={
                      cn("") + pathname == "/about" ? "text-black" : ""
                    }
                  >
                    About
                  </Link>
                  <hr />
                </li>

                <li>
                  <Link href="/Resume.pdf" target="_blank">Resume</Link>
                  <hr />
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {/* For desktop */}
      <div className="hidden md:block md:font-light text-gray-400">
        <ul className="flex gap-10 transition ease-in-out delay-150 ">
          <li>
            <Link
              href="/"
              className={cn("") + pathname == "/" ? "text-black" : ""}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={cn("") + pathname == "/about" ? "text-black" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link href="/Resume.pdf" target="_blank">Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
