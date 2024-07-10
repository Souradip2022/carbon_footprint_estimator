"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoMdRocket } from "react-icons/io";
import { CgCoffee } from "react-icons/cg";
import { TiTree } from "react-icons/ti";
import SkeletonStructure from "@/components/shared_components/SkeletonStructure";
import axios from "axios";

function InputFlightData() {
  const [fromAirport, setFromAirport] = useState<string>("");
  const [toAirport, setToAirport] = useState<string>("");
  const [passengers, setPassengers] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [co2, setCO2] = useState<number>(0);
  const [consume, setConsume] = useState<number>(0);

  const handleSubmit = () => {
    if (fromAirport === "" || toAirport === "" || passengers === "") {
      alert("Please fill all the fields");
      return;
    }
    setIsLoading(true);
    const encodedParams = new URLSearchParams();
    encodedParams.set("iata_airport_from", fromAirport);
    encodedParams.set("iata_airport_to", toAirport);
    encodedParams.set("number_of_passengers", passengers);

    const options = {
      method: "POST",
      url: "https://carbonsutra1.p.rapidapi.com/flight_estimate",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTHORIZATION}`,
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_Key,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_Host,
      },
      data: encodedParams,
      timeout: 10000, // 10 seconds timeout
    };

    axios
      .request(options)
      .then((res) => {
        setCO2(res.data.data.co2e_kg);
        setConsume(Math.floor(Math.random() * 3) + 1);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="flex flex-col w-full items-center h-fit justify-center gap-y-6">
      <div className="grid lg:grid-cols-4 grid-cols-2 w-full min-h-fit gap-4 ">
        <Input
          type="text"
          className="bg-muted flex-grow break-words h-full min-h-fit max-h-[100px] rounded-lg border-accent-foreground"
          placeholder="iata_airport_from_code"
          value={fromAirport}
          required={true}
          onChange={(e) => {
            const input = e.target.value.trim();
            setFromAirport(input);
          }}
        />
        <Input
          type="text"
          className="bg-muted flex-grow break-words h-full min-h-fit max-h-[100px] rounded-lg border-accent-foreground"
          placeholder="iata_airport_to_code"
          required={true}
          value={toAirport}
          onChange={(e) => setToAirport(e.target.value.trim())}
        />
        <Input
          type="text"
          className="bg-muted flex-grow break-words h-full min-h-fit max-h-[100px] rounded-lg border-accent-foreground"
          placeholder="number_of_passengers"
          required={true}
          value={passengers}
          onChange={(e) => setPassengers(e.target.value.trim())}
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
            <IoMdRocket className="w-full h-full" color={"rgb(235 216 200 )"} />
          </div>
          <div className=" w-[80%] h-[80%] ">
            {isLoading ? (
              <div className="h-full w-full flex justify-center items-center">
                <SkeletonStructure />
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
            <CgCoffee className="w-full h-full" color={"rgb(140 173 255)"} />
          </div>
          <div className=" w-[80%] h-[80%] ">
            {isLoading ? (
              <div className="h-full w-full flex justify-center items-center">
                <SkeletonStructure />
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
            <TiTree className="w-full h-full" color={"green"} />
          </div>
          <div className=" w-[80%] h-[80%] ">
            {isLoading ? (
              <div className="h-full w-full flex justify-center items-center">
                <SkeletonStructure />
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

export default InputFlightData;
