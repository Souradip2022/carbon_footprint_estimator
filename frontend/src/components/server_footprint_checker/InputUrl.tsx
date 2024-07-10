"use client";
import React, {useEffect, useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import axios from "axios";
import SkeletonStructure from "../shared_components/SkeletonStructure";
import {TiTree} from "react-icons/ti";
import {CgCoffee} from "react-icons/cg";
import {IoMdRocket} from "react-icons/io";
import {apiFetch} from "@/components/server_footprint_checker/apiFetch";

function InputUrl() {

  const [urlValue, setUrlValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [co2, setCO2] = useState<number>(0);
  const [consume, setConsume] = useState<number>(0);

  const handleSubmit = () => {
    if (!urlValue) {
      alert("Please fill the field");
      return;
    }
    setIsLoading(true);

    apiFetch(urlValue)
    .then((data: any) => {
      const response = data.statistics.co2;
      // console.log(response);
      const grid = (response.grid.grams / 1000) * 365;
      const ren = (response.renewable.grams / 1000) * 365;
      const sum = grid + ren;

      setCO2(sum * 100);
      setConsume(Math.floor(Math.random() * 3) + 1);
    })
    .catch((error: any) => {
      console.log("Failed to fetch api", error.message);
      setCO2(0);
      setConsume(0);
    })
    .finally(() => setIsLoading(false))
  };

  return (
    <div>
      <div className="flex w-full items-center space-x-2 h-12 mb-16">
        <Input
          type="text"
          className="bg-muted flex-grow break-words h-full min-h-fit max-h-[100px] rounded-lg border-accent-foreground"
          placeholder="Enter URL of the webpage"
          value={urlValue}
          onChange={(e) => {
            e.preventDefault();
            const input = e.target.value.trim();
            setUrlValue(input);
          }}
        />
        <Button
          type="button" // Changed from submit to button if it's not submitting a form
          className="h-12"
          onClick={() => handleSubmit()}
        >
          Calculate
        </Button>
      </div>
      <div className="grid grid-cols-3 w-full min-h-40 gap-4  items-center">
        <div className="bg-muted w-full h-full flex items-center justify-evenly p-4 gap-8">
          <div className="w-[20%] h-[50%] border-white ">
            <IoMdRocket className="w-full h-full" color={"rgb(235 216 200 )"}/>
          </div>
          <div className=" w-[80%] h-[80%] ">
            {isLoading ? (
              <div className="h-full w-full flex justify-center items-center">
                <SkeletonStructure/>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col justify-evenly items-start text-left gap-y-3">
                <p className={"text-lg"}>
                  Every year, your boarded flight emits
                </p>
                <p className=" text-2xl ">{co2.toFixed(2)} Kg CO2e</p>
              </div>
            )}
          </div>
        </div>
        <div className="bg-muted w-full h-full flex items-center justify-evenly p-4 gap-8">
          <div className="w-[20%] h-[50%] border-white ">
            <CgCoffee className="w-full h-full" color={"rgb(140 173 255)"}/>
          </div>
          <div className=" w-[80%] h-[80%] ">
            {isLoading ? (
              <div className="h-full w-full flex justify-center items-center">
                <SkeletonStructure/>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col justify-evenly items-start text-left gap-y-3">
                <p className={"text-lg"}>Equivalent to</p>
                <p className=" text-2xl ">
                  {(co2 * 4.7619).toFixed(2)} cups of coffee
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="bg-muted w-full h-full flex items-center justify-evenly p-4 gap-8">
          <div className="w-[20%] h-[50%] border-white ">
            <TiTree className="w-full h-full" color={"green"}/>
          </div>
          <div className=" w-[80%] h-[80%] ">
            {isLoading ? (
              <div className="h-full w-full flex justify-center items-center">
                <SkeletonStructure/>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col justify-evenly items-start text-left gap-y-3">
                <p className={"text-lg"}>
                  Equivalent to the amount of carbon absorbed by
                </p>
                <p className=" text-2xl ">
                  {(co2 * 0.04545).toFixed(2)} trees per year
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <div
          className=" rounded-full w-full flex items-center justify-between text-black py-4 px-6 gap-4 text-center"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,255,0,1) 0%, rgba(255,255,0,1) 50%, rgba(255,0,0,1) 100%)",
          }}
        >
          <div className="w-1/12">A+</div>
          <div className="w-1/12">A</div>
          <div className="w-1/12 relative">
            <span className={consume === 1 ? "bg-white p-2 rounded-full" : ""}>
              B
            </span>
            {consume === 1 && (
              <div className="absolute -top-10 text-white left-1/2 -translate-x-1/2">
                <span>You are Here</span>
              </div>
            )}
          </div>
          <div className="w-1/12 relative">
            <span className={consume === 2 ? "bg-white p-2 rounded-full" : ""}>
              C
            </span>
            <div className="absolute -top-10 text-white left-1/2 -translate-x-1/2">
              <span className="whitespace-nowrap">
                Recommended {consume === 2 && "and You are Here"}
              </span>
            </div>
          </div>
          <div className="w-1/12 relative">
            <span className={consume === 3 ? "bg-white p-2 rounded-full" : ""}>
              D
            </span>
            {consume === 3 && (
              <div className="absolute -top-10 text-white left-1/2 -translate-x-1/2">
                <span>You are Here</span>
              </div>
            )}
          </div>
          <div className="w-1/12 relative">
            <span className="bg-white p-2 rounded-full">E</span>{" "}
            <div className="absolute -top-10 text-white">
              <span>World is Here</span>
            </div>
          </div>
          <div className="w-3/12">F</div>
        </div>
      </div>
    </div>
  );
}

export default InputUrl;
