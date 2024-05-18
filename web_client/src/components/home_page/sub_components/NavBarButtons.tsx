"use client"
import React from "react"
import {Button} from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {DropdownMenuItem} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";


export function NavBarButton1() {
  return (
    <>
      <DropdownMenu>
        <Link href={"/"}>
          <DropdownMenuTrigger className=" text-lg p-1.5">Home</DropdownMenuTrigger>
        </Link>
      </DropdownMenu>
    </>
  )
}

export function NavBarButton2() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className=" text-lg p-1.5">Models</DropdownMenuTrigger>
        <DropdownMenuContent className={"flex flex-col gap-2 w-52"}>
          <DropdownMenuItem className={"text-center"}>Profile</DropdownMenuItem>
          <DropdownMenuItem className={"text-center"}>Billing</DropdownMenuItem>
          <DropdownMenuItem className={"text-center"}>Team</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export function NavBarButton3() {
  return (
    <>
      <DropdownMenu>
        <Link href={"/"}>
          <DropdownMenuTrigger className=" text-lg p-1.5">Developer</DropdownMenuTrigger>
        </Link>
      </DropdownMenu>
    </>
  )
}

