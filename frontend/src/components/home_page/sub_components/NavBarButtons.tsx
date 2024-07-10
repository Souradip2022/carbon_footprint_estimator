"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function NavBarButton1() {
  return (
    <>
      <DropdownMenu>
        <Link href={"/"}>
          <DropdownMenuTrigger className=" text-lg p-1.5 border-2 border-transparent hover:border-muted-foreground hover:rounded-md">
            Home
          </DropdownMenuTrigger>
        </Link>
      </DropdownMenu>
    </>
  );
}

export function NavBarButton2() {
  const router = useRouter();
  const models = [
    {
      name: "Flights",
      url: "/all_models/flight-emissions-calculator",
    },
    {
      name: "Servers",
      url: "/all_models/server_carbon_footprint",
    },
    {
      name: "Hotels",
      url: "/all_models/hotel-carbon-impact-calculator",
    },
    {
      name: "Electricity",
      url: "/all_models/electricity-carbon-usage-estimator",
    },
    {
      name: "Vehicles",
      url: "/all_models/vehicle-emissions-by-model",
    },
  ];

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className=" text-lg p-1.5 border-2 border-transparent hover:border-muted-foreground hover:rounded-md">
          Models
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={
            "flex flex-col gap-2 w-52 box-content text-primary p-1 bg-secondary"
          }
        >
          <div className=" w-full h-full  backdrop-saturate-100">
            <Link href="/all_models">
              <DropdownMenuLabel className={"pb-0 pt-1 text-center"}>
                All models
              </DropdownMenuLabel>
            </Link>
            <DropdownMenuSeparator />

            {models.map((item) => (
              <DropdownMenuItem
                className={"text-center cursor-pointer"}
                key={item.name}
                onClick={() => router.push(item.url)}
              >
                {item.name}
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export function NavBarButton3() {
  return (
    <>
      <DropdownMenu>
        <Link href={"/"}>
          <DropdownMenuTrigger className=" text-lg p-1.5 border-2 border-transparent hover:border-muted-foreground hover:rounded-md">
            Developers
          </DropdownMenuTrigger>
        </Link>
      </DropdownMenu>
    </>
  );
}
