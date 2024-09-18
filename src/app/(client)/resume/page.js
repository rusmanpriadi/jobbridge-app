import ClientLayout from "../../../components/layout/ClientLayout";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Resume",
  description: "Generated by create next app",
};

const Resume = () => {
  return (
    <ClientLayout>
      <div className="px-8 mt-5 ">
        <h1 className="text-xl font-semibold">Formasi</h1>
        <div className="mt-10">
          <h4 className="pb-3">Pilih formasi yang diinginkan : </h4>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Resume;
