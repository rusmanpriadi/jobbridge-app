"use client";

import React, { useState, useEffect } from "react";
import {
  HiEllipsisHorizontal,
  HiArrowLeft,
  HiChevronDown,
  HiChevronUp,
  HiMiniIdentification,
} from "react-icons/hi2";
import { Row } from "@tanstack/react-table";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
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
} from "../../../../components/ui/sheet";

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
} from "../../../../components/ui/dropdown-menu";
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

          <Sheet className="max-w-[500px] p-0">
            <SheetTrigger asChild>
              <Button
                variant="none"
                size="none"
                className="flex flex-end justify-start cursor-default select-none  rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-slate-100 w-full"
              >
                View
              </Button>
            </SheetTrigger>
            <SheetContent className="max-w-[600px] p-0">
              <SheetHeader className="flex space-x-4 w-full p-3">
                <div className="w-full font-medium flex items-center justify-between pr-10">
                  <div className="flex items-center space-x-2">
                    <span className="p-1 text-greent bg-muted rounded-full">
                      <HiMiniIdentification className="h-4 w-4" />
                    </span>
                    <p className="text-sm text-slate-700 w-full max-w-[95px] border-r">
                      Pelamar View
                    </p>
                  </div>

                  <Link
                    href={`/pelamar/${row.original.id}`}
                    className="text-[11px] w-full p-2 rounded-lg border border-slate-300 hover:bg-slate-100 max-w-[105px]"
                  >
                    View Full Details
                  </Link>
                </div>
              </SheetHeader>
              <div className="mt-6">
                <Preview
                  img={row.original.image}
                  name={row.original.name}
                  formasi={row.original.formasi}
                  status={row.original.status}
                  tgl_lahir={row.original.tgl_lahir}
                  id={row.original.id}
                  phone={row.original.phone}
                  apply={row.original.apply}
                  email={row.original.email}
                  jenis_kelamin={row.original.jenis_kelamin}
                  nik={row.original.nik}
                  className="p-3"
                />
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  {/* <Button type="submit">Save changes</Button> */}
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <DropdownMenuItem className="p-[0px]">
            <Link
              href={`/pelamar/${row.original.id}`}
              className="w-full text-slate-800 font-medium px-2 py-[6px] "
            >
              Detail
            </Link>
          </DropdownMenuItem>
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
