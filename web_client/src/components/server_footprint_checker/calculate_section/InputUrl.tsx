import React from 'react';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

function InputUrl() {
  return (
    <div className="flex w-full items-center space-x-2 h-12">
      <Input
        type="email"
        className="bg-muted flex-grow break-words h-full min-h-fit max-h-[100px] rounded-lg border-accent-foreground"
        placeholder="Enter URL of the webpage"
      />
      <Button type="submit" className="h-12">Calculate</Button>
    </div>
  );
}

export default InputUrl;