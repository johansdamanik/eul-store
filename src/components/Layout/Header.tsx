"use client";

import { useRef, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  HiMenuAlt4,
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiOutlineX,
} from "react-icons/hi";
import { HiMagnifyingGlass, HiOutlineUser } from "react-icons/hi2";

export default function Header() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  const LinkMenu = () => {
    return (
      <ul className="flex flex-col items-start gap-4 font-semibold text-gray-700 md:flex-row md:items-center">
        <li>
          <Link href="/men" className={getLinkClass("/men")}>
            MEN
          </Link>
        </li>
        <li>
          <Link href="/women" className={getLinkClass("/women")}>
            WOMEN
          </Link>
        </li>
        <li>
          <Link href="/accessories" className={getLinkClass("/accessories")}>
            ACCESSORIES
          </Link>
        </li>
      </ul>
    );
  };

  const SearchMenu = () => {
    const inputRef = useRef<HTMLInputElement>(null); // Create a reference for the input element

    const handleOpen = () => {
      // Focus input after the sheet is fully opened
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 0); // Small delay to ensure the element is mounted
    };

    const side = isMobile ? "top" : "right";

    return (
      <Sheet onOpenChange={handleOpen}>
        <SheetTrigger asChild>
          <HiMagnifyingGlass className="cursor-pointer text-xl" />
        </SheetTrigger>
        <SheetContent side={side}>
          <SheetClose />
          <SheetHeader className="hidden">
            <SheetTitle>Eul Store Search</SheetTitle>
            <SheetDescription>Search Products</SheetDescription>
          </SheetHeader>
          {/* Attach the ref to the input */}
          <Input ref={inputRef} className="" placeholder="Search" />
        </SheetContent>
      </Sheet>
    );
  };

  // Function to determine the class for links
  const getLinkClass = (path: string): string =>
    pathname === path
      ? "underline decoration-redMain decoration-2 underline-offset-4"
      : "text-gray-500 hover:underline hover:decoration-gray-700 hover:decoration-2 hover:underline-offset-4";

  return (
    <>
      <header className="sticky top-0 z-50">
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
            <div className="hidden md:block">
              <LinkMenu />
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <SearchMenu />
            <HiOutlineHeart className="cursor-pointer text-xl" />
            <HiOutlineShoppingBag className="cursor-pointer text-xl" />
            <HiOutlineUser className="cursor-pointer text-xl" />
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
              <LinkMenu />
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}
