import React from "react";
import Badge from "@/components/server_footprint_checker/sub_components/Badge";

interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
  gradient: string;
  title: string;
  className?: string;
}

const InfoWrapper = ({ icon, gradient, title, children, className }: Props) => {
  return (
    <section
      className={`w-full h-full text-white bg-muted  border-2 border-border rounded-xl   ${className}`}
    >
      <div className=" w-full space-y-4 p-8  backdrop-contrast-100  h-full border-2 border-primary rounded-2xl">
        <Badge icon={icon} title={title} gradient={gradient} />
        {children}
      </div>
    </section>
  );
};

export default InfoWrapper;