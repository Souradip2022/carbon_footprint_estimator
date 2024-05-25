import {
  Accordion as AccordionShad,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {BsFillBalloonHeartFill} from "react-icons/bs";
import InfoWrapper from "@/components/shared_components/sub_components/InfoWrapper";

import urlServerData from "@/components/server_footprint_checker/data/StepGuidanceServer.json";

export function StepGuidance({params}: { params: { slug: string } }) {

  let data: Array<{ trigger: string; content: string }>;
  if (params.slug === "server_carbon_footprint") {
    data = urlServerData;
  } else {
    data = [];
  }

  return (
    <InfoWrapper
      icon={<BsFillBalloonHeartFill/>}
      title="What steps can you take?"
      gradient="from-background to-renaissance text-thallium-flame"
    >
      <AccordionShad type="single" collapsible className="w-full">

        {data.map((item, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}

      </AccordionShad>
    </InfoWrapper>

  );
}