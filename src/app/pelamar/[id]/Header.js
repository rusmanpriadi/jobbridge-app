import React from "react";
import { Button } from "../../../components/ui/button";
import { HiArrowLeft, HiChevronDown, HiChevronUp } from "react-icons/hi2";

const Header = ({
  handlePrev,
  handleNext,
  isFirstApplicant,
  isLastApplicant,
  handleBack,
}) => {
  return (
    <header className="px-5 py-3 flex items-center justify-between h-[70px] w-full ">
      <div className="flex items-center space-x-3">
        <Button
          size="none"
          onClick={handleBack}
          className=" p-[1px] rounded-md  bg-white hover:bg-white "
        >
          <HiArrowLeft className="text-lg  font-semibold text-slate-900 hover:text-slate-500" />
        </Button>
        <section className="flex items-center space-x-2">
          <Button
            size="none"
            onClick={handlePrev}
            disabled={isFirstApplicant}
            className=" p-[1px] rounded-md border bg-white border-slate-300 hover:bg-muted"
          >
            <HiChevronUp className=" text-lg  font-semibold text-slate-900 " />
          </Button>
          <Button
            size="none"
            onClick={handleNext}
            disabled={isLastApplicant}
            className=" p-[1px] rounded-md border bg-white border-slate-300 hover:bg-muted"
          >
            <HiChevronDown className=" text-lg  font-semibold text-slate-900" />
          </Button>
        </section>
      </div>
      <Button className="text-xs">Add Pelamar</Button>
    </header>
  );
};

export default Header;
