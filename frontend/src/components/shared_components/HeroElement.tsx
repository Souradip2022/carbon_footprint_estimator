import {IoEarthSharp} from "react-icons/io5";
import Link from "next/link";

const webServer: Array<string> = [
  "Make a difference, reduce your digital emissions.",
  "Estimate your websites carbon",
  "find out the impact of your website on the planet"
]

const vehicle: Array<string> = [
  "Make a difference, reduce your vehicle emission.",
  "Estimate your vehicle emission",
  "find out the impact of your vehicle on the planet"
];

const flight: Array<string> = [
  "Make a difference, know well about your onboarding flight emission",
  "Estimate your boarded flight emission",
  "find out the impact of your onboarding flight on the planet"
]

const hotel: Array<string> = [
  "Make a difference, know well about your on stay hotel emission",
  "Estimate your on stay hotel emission",
  "find out the impact of your on stay hotel on the planet"
]

const electricity: Array<string> = [
  "Understand your electricity consumption's carbon footprint",
  "Calculate your electricity carbon emissions",
  "Discover the environmental impact of your electricity usage"
];

const HeroElement = ({params}: { params: { slug: string } }) => {
  let data: Array<string> = ["", "", ""];

  if (params.slug === "server_carbon_footprint") {
    data = webServer;
  } else if (params.slug === "vehicle-emissions-by-model") {
    data = vehicle;
  } else if (params.slug === "flight-emissions-calculator") {
    data = flight;
  } else if (params.slug === "hotel-carbon-impact-calculator") {
    data = hotel;
  } else if (params.slug === "electricity-carbon-usage-estimator") {
    data = electricity;
  }

  return (
    <div
      className="w-[90%] h-[410px] relative rounded-xl px-7 pt-2 pb-20 space-y-8 py-20 md:space-y-10 md:px-10 text-black bg-gradient-to-br from-blue-600 to-pink-500 my-24">

      <div className="flex items-center justify-between ">
        <div className="">
          <i className="text-big-stone text-3xl hidden">
            <IoEarthSharp color="white"/>
          </i>
        </div>
        <Link
          href="#calculate"
          className="bg-background rounded-full px-4 py-1 text-white relative top-[21rem] text-lg "
        >
          Calculate
        </Link>
      </div>
      <div className="flex justify-start">
        <div className="hidden max-w-[150px] h-full lg:flex flex-col flex-2 text-neutral-100">
          <p className="">{data[0]}</p>
        </div>
        <div className="md:min-w-[750px]">
          <h1
            className={`font-medium text-4xl px-0  md:min-w-[750px] xs:text-5xl uppercase text-big-stone z-1 md:text-7xl xs:px-10 md:px-20 md:pb-10 w-8/12 }  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 h-fit`}
          >
            {data[1]}
            <span
              className="flex items-start justify-start bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-40">
              footprint
              <span
                className="hidden pl-2 text-base  lg:inline w-full normal-case max-w-[270px] text-neutral-50 relative top-2.5">
                {data[2]}
              </span>
            </span>
          </h1>
        </div>
      </div>
    </div>

  );
};

export default HeroElement;