import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../../components/ui/sheet";
import { Button } from "../../../../components/ui/button";
import { HiMiniUserGroup } from "react-icons/hi2";

export const AddPelamarModal = () => {
  return (
    <Sheet className="max-w-[500px] p-0">
      <SheetTrigger asChild>
        <Button className="text-xs px-5 py-2" size="none" variant="green">
          Add Pelamar
        </Button>
      </SheetTrigger>
      <SheetContent className="max-w-[600px]">
        <SheetHeader className="flex  w-full ">
          <div className="w-full font-medium flex items-center space-x-2 border-b pb-4">
            <span className="p-1 text-greent bg-muted rounded-full">
              <HiMiniUserGroup className="h-4 w-4" />
            </span>
            <p className="text-sm text-slate-700 w-full max-w-[150px] border-r">
              Create New Pelamar
            </p>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
