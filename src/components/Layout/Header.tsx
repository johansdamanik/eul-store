"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";

export default function Header() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  // Function to determine the class for links
  const getLinkClass = (path: string): string =>
    pathname === path
      ? "underline decoration-red decoration-2 underline-offset-4"
      : "text-gray-500 hover:underline hover:decoration-gray-700 hover:decoration-2 hover:underline-offset-4";

  return (
    <>
      <header className="sticky top-0">
        <div className="flex items-center justify-between bg-white px-4 py-4 md:px-8 md:py-6">
          <div className="flex items-center gap-2 md:gap-8">
            {/* Hamburger Menu */}
            <HiMenuAlt4
              className="block cursor-pointer text-2xl active:scale-95 md:hidden"
              onClick={toggleDrawer}
            />

            {/* Logo */}
            <Link href="/" className="">
              <img src="/logo.webp" alt="Eul Cloth" className="h-8" />
            </Link>

            {/* Navigation Links */}
            <ul className="hidden items-center gap-4 font-semibold text-gray-700 md:flex">
              <li>
                <Link href="/man" className={getLinkClass("/man")}>
                  MAN
                </Link>
              </li>
              <li>
                <Link href="/woman" className={getLinkClass("/woman")}>
                  WOMAN
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories"
                  className={getLinkClass("/accessories")}
                >
                  ACCESSORIES
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Drawer for Mobile Menu */}
      {isMobile && (
        <Drawer
          open={isDrawerOpen}
          onClose={toggleDrawer}
          direction="left"
          handleOnly={false}
        >
          <DrawerTitle className="hidden">Eul Store</DrawerTitle>
          <DrawerDescription className="hidden">
            Good Vibes Cloth
          </DrawerDescription>
          <DrawerContent className="h-full w-11/12 rounded-none sm:w-3/5">
            <div className="flex items-center justify-between p-4">
              {/* Logo */}
              <Link href="/" className="">
                <img src="/logo.webp" alt="Eul Cloth" className="h-8" />
              </Link>
              <DrawerClose>
                <HiOutlineX className="block cursor-pointer text-2xl active:scale-95 md:hidden" />
              </DrawerClose>
            </div>
            <div className="p-4">
              <ul className="flex flex-col gap-4 font-semibold text-gray-700">
                <li>
                  <Link
                    href="/man"
                    className={getLinkClass("/man")}
                    onClick={toggleDrawer}
                  >
                    MAN
                  </Link>
                </li>
                <li>
                  <Link
                    href="/woman"
                    className={getLinkClass("/woman")}
                    onClick={toggleDrawer}
                  >
                    WOMAN
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accessories"
                    className={getLinkClass("/accessories")}
                    onClick={toggleDrawer}
                  >
                    ACCESSORIES
                  </Link>
                </li>
              </ul>
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}
