"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Header() {
  const { user, isSignedIn } = useUser();
  const MenuList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Create",
      path: "/create",
    },
    {
      name: "Explore",
      path: "/explore",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];
  const [isMenuOpen, setMenu] = useState(false);
  return (
    <Navbar maxWidth="xl" onMenuOpenChange={setMenu}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarMenu>
        {MenuList.map((item, index) => {
          return (
            <NavbarMenuItem key={index}>
              <Link href={item.path}>{item.name}</Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
      <NavbarContent className="flex gap-10">
        <NavbarBrand>
          <Image src="logo.svg" alt="logo" width={40} height={40} />
          <h2 className="font-bold text-2xl text-secondary-700 ml-3">
            Kids Stories
          </h2>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="hidden sm:flex gap-10">
        {MenuList.map((item, index) => {
          return (
            <NavbarItem key={index}>
              <Link
                className="text-xl font-bold text-secondary-800 "
                key={index}
                href={item.path}
              >
                {item.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <Link href="/dashboard">
          <Button color="secondary">
            {isSignedIn ? "Dashboard" : "Get Started"}
          </Button>
        </Link>
        <UserButton />
      </NavbarContent>
    </Navbar>
  );
}
