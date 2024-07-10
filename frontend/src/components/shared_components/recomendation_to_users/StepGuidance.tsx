import {
  Accordion as AccordionShad,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import InfoWrapper from "@/components/shared_components/sub_components/InfoWrapper";

export function StepGuidance({ params }: { params: { slug: string } }) {
  let data: Array<{ trigger: string; content: string }>;

  switch (params.slug) {
    case "flight-emissions-calculator":
      data = [
        {
          trigger: "Choose Alternative Transportation",
          content:
            "Opt for trains, buses, or carpooling instead of flights for short and medium distances. These modes of transport generally have a lower carbon footprint.",
        },
        {
          trigger: "Fly Non-Stop",
          content:
            "Select non-stop flights whenever possible, as takeoffs and landings produce a significant portion of a flight’s emissions. Non-stop flights reduce the number of these high-emission phases.",
        },
        {
          trigger: "Use Efficient Airlines",
          content:
            "Choose airlines that operate newer, more fuel-efficient aircraft and have higher occupancy rates. Some airlines are also committed to using sustainable aviation fuels.",
        },
        {
          trigger: "Offset Flight Emissions",
          content:
            "Purchase carbon offsets for your flights to invest in projects that reduce or capture carbon emissions, such as reforestation or renewable energy projects.",
        },
        {
          trigger: "Travel Light",
          content:
            "Pack only what you need to reduce the weight of the aircraft. Lighter planes require less fuel, leading to lower emissions per passenger.",
        },
      ];
      break;
    case "hotel-carbon-impact-calculator":
      data = [
        {
          trigger: "Choose Eco-Friendly Accommodations",
          content:
            "Select hotels and accommodations that have implemented sustainable practices, such as energy-efficient lighting, water-saving measures, and waste reduction initiatives.",
        },
        {
          trigger: "Conserve Water and Energy",
          content:
            "Use water and electricity wisely during your stay. Reuse towels and linens instead of requesting new ones daily, and turn off lights and appliances when not in use.",
        },
        {
          trigger: "Support Local and Organic",
          content:
            "Opt for hotels that source their food and amenities locally and prioritize organic and sustainably sourced products. This reduces the carbon footprint associated with transportation and production.",
        },
        {
          trigger: "Offset Hotel Stays",
          content:
            "Offset the carbon emissions from your hotel stay by investing in carbon offset programs that support projects like reforestation or renewable energy development.",
        },
        {
          trigger: "Reduce Waste",
          content:
            "Minimize waste by avoiding single-use plastics and packaging, recycling materials whenever possible, and choosing accommodations that have implemented recycling programs.",
        },
      ];
      break;
    case "electricity-carbon-usage-estimator":
      data = [
        {
          trigger: "Switch to Renewable Energy",
          content:
            "Consider installing solar panels or purchasing renewable energy from your utility provider to power your home or business with clean, renewable sources like solar or wind.",
        },
        {
          trigger: "Improve Energy Efficiency",
          content:
            "Upgrade to energy-efficient appliances, lighting, and HVAC systems. Ensure your home or building is well-insulated to reduce heating and cooling energy needs.",
        },
        {
          trigger: "Reduce Phantom Loads",
          content:
            "Unplug electronics and appliances when not in use to prevent energy wastage from standby power consumption. Use power strips to easily turn off multiple devices at once.",
        },
        {
          trigger: "Opt for Time-of-Use Plans",
          content:
            "Choose electricity plans that offer lower rates during off-peak hours, encouraging energy consumption when renewable energy sources are more abundant and reducing strain on the grid.",
        },
        {
          trigger: "Invest in Energy Storage",
          content:
            "Install battery storage systems to store excess energy generated from renewable sources for use during peak demand times or when renewable generation is low.",
        },
      ];
      break;
    default:
      data = [
        {
          trigger: "Reduce Energy Consumption",
          content:
            "Switch to renewable energy, improve energy efficiency, reduce vehicle use, and conserve electricity by turning off lights and unplugging devices when not in use.",
        },
        {
          trigger: "Adopt Sustainable Practices",
          content:
            "Reduce, reuse, and recycle materials. Make sustainable food choices, use sustainable transportation, and support businesses that prioritize sustainability.",
        },
        {
          trigger: "Offset Carbon Emissions",
          content:
            "Invest in carbon offsetting programs, such as reforestation or renewable energy projects. Calculate your personal carbon footprint and invest in offsets to neutralize emissions.",
        },
        {
          trigger: "Advocate and Educate",
          content:
            "Support policies that reduce carbon emissions, such as carbon pricing and renewable energy subsidies. Raise awareness and educate others about the importance of reducing carbon emissions.",
        },
        {
          trigger: "Economic Constraints",
          content:
            "High initial costs of renewable energy systems, electric vehicles, and energy-efficient appliances can be prohibitive. Sustainable products often cost more, making them less accessible to lower-income households.",
        },
      ];
      break;
  }

  return (
    <InfoWrapper
      icon={<BsFillBalloonHeartFill />}
      title="What steps can you take?"
      gradient="from-background to-renaissance text-thallium-flame"
    >
      <AccordionShad type="single" collapsible className="w-full">
        {data.map((item, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </AccordionShad>
    </InfoWrapper>
  );
}
