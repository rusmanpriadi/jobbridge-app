"use client";

import React, { useState, useEffect } from "react";
import {
  HiEllipsisHorizontal,
  HiArrowLeft,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi2";
import { Row } from "@tanstack/react-table";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import Preview from "../preview/page";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";

import { labels } from "../data/data";
import Link from "next/link";

export function DataTableRowActions({ row }) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <HiEllipsisHorizontal className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem>Edit</DropdownMenuItem>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="none"
                size="none"
                className="flex flex-end justify-start cursor-default select-none  rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-slate-100 w-full"
              >
                View
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="flex space-x-4 w-full">
                <div className="w-full font-medium flex items-center">
                  <p className="text-sm text-slate-700 w-full max-w-[95px] border-r">Pelamar View</p>
                  <section className="w-full flex items-center justify-between space-x-2 ms-2">
                    <div className="flex items-center space-x-2">
                      <div className=" p-[2px] rounded-full border border-slate-300">
                        <HiChevronDown className="cursor-pointer text-lg  font-semibold text-slate-900 " />
                      </div>
                      <div className=" p-[2px] rounded-full border border-slate-300">
                        <HiChevronUp className="cursor-pointer text-lg  font-semibold text-slate-900 " />
                      </div>
                    </div>
                  </section>
                    <Button size="xs" className="text-xs mr-6">
                      View Full Details
                    </Button>
                </div>
              </SheetHeader>
              <div className="mt-6">
                <Preview
                  img={row.original.image}
                  name={row.original.name}
                  formasi={row.original.formasi}
                  status={row.original.status}
                />
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  {/* <Button type="submit">Save changes</Button> */}
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <DropdownMenuItem>Favorite</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              {/* <DropdownMenuRadioGroup value={task.label}>
              {labels.map((label) => (
                <DropdownMenuRadioItem key={label.value} value={label.value}>
                  {label.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup> */}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
