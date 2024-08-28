"use client";

import React, { useState, useEffect } from "react";
import {
  HiMiniSignal,
  HiOutlineEyeDropper,
  HiOutlineCodeBracket,
  HiMiniClock,
  HiMiniCheckBadge,
  HiMiniXCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../../../components/ui/badge";
import { Checkbox } from "../../../components/ui/checkbox";
import {  Avatar,
  AvatarFallback,
  AvatarImage,} from "../../../components/ui/avatar";
import { iconFormasi, statusMap } from "../data/data";

import { DataTableColumnHeader } from "../../../components/table/data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";


export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="No.Reg"
        className="text-[13px] text-slate-800"
      />
    ),
    cell: ({ row }) => (
      <div className="w-[70px] truncate font-medium">{row.getValue("id")}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nama" />
    ),
    cell: ({ row }) => {

      return (
        <div className="flex items-center space-x-2">
          <Avatar className="w-5 h-5 rounded-full ">
            <AvatarImage
              src={`${`http://127.0.0.1:8000/storage/pelamar/${row.original.image}`}`}
              alt="@shadcn"
              className="object-cover"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {/* <img alt="avatar" className="w-6 h-6 rounded-full" /> */}
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className="max-w-[150px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {

      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className="max-w-[170px] truncate font-semibold text-bluet">
            {row.getValue("email")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "formasi",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Formasi" />
    ),
    cell: ({ row }) => {

  const formasiName = row.getValue("formasi");

  // Gunakan formasiName untuk mendapatkan komponen ikon yang sesuai
  const IconComponent = iconFormasi[formasiName] || HiOutlineCodeBracket; ;

      return (
        <div className=" max-w-[170px] ">
          <div className="flex items-center w-full ">
            <section className="bg-slate-100 flex items-center px-2 py-1 rounded-full ">
              {IconComponent && (
                <IconComponent className="mr-2 text-[13px] text-slate-800" />
              )}
              <span className="text-slate-900 font-semibold text-[11px]">
                {formasiName || "-"}
              </span>
            </section>
          </div>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone Number" />
    ),
    cell: ({ row }) => {

      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className="max-w-[120px] truncate font-medium  text-[12px] text-bluet">
            {row.getValue("phone")}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "apply",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tgl.Appy" />
    ),
    cell: ({ row }) => {

      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className="max-w-[120px] truncate font-medium">
            {row.getValue("apply")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
     const statusName = row.getValue("status");

     // Dapatkan ikon dan warna berdasarkan status
     const { icon: IconComponent, color } = statusMap[statusName] || {};

      return (
        <div className="flex items-center">
          <div className="flex items-center w-full ">
            <section
              className={`${color} flex items-center px-2 py-1 rounded-full  text-[10px] font-semibold`}
            >
              {IconComponent && <IconComponent className="mr-1 h-3 w-3" />}
              <span className="text-[10px]"> {statusName || "-"}</span>
            </section>
          </div>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];

