"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover";

import { FloatingLabel } from "./floating-input";


export function DatePickerSingle({
  onSelect,
  selectedDate,
  placeholder,
  onBlur,
  floatingLabel,
}) {
  const triggerRef = React.useRef(null);
  const onDateSelect = (date) => {
    onSelect && onSelect(date);
    triggerRef.current?.click();
  };
  return (
    <Popover onOpenChange={(value) => !value && onBlur && onBlur()}>
      <PopoverTrigger asChild>
        <Button
          ref={triggerRef}
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal relative hover:bg-transparent hover:border-primary",
            !selectedDate && "text-muted-foreground"
          )}
        >
          {selectedDate ? (
            format(selectedDate, "PPP")
          ) : (
            <span>{placeholder ?? "Pick a date"} </span>
          )}
          <CalendarIcon className="h-[14px] w-[14px] ml-auto" />
          {floatingLabel && <FloatingLabel>{floatingLabel}</FloatingLabel>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={onDateSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
