"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "../../components/ui/badge";
import { Checkbox } from "../../components/ui/checkbox";

import { labels, priorities, statuses } from "./data/data";
import { Task } from "./data/schema";
import { DataTableColumnHeader } from "../../components/table/data-table-column-header";
import { DataTableRowActions } from "../../components/table/data-table-row-actions";

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
        title="Id"
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
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Formasi" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label);

      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className="max-w-[150px] truncate font-medium">
            {row.getValue("title")}
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
      const label = labels.find((label) => label.value === row.original.label);

      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className="max-w-[160px] truncate font-semibold text-bluet">
            {row.getValue("email")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Formasi" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className=" max-w-[150px] ">
          <div className="flex items-center w-full ">
            <section className="bg-slate-100 flex items-center px-2 py-1 rounded-full text-[10px]">
              {status.icon && (
                <status.icon className="mr-2 h-3 w-3 text-slate-800" />
              )}
              <span className="text-slate-900 font-semibold ">
                {status.label}
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
      <DataTableColumnHeader column={column} title="Phone" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label);

      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className="max-w-[120px] truncate font-medium font-semibold text-[12px] text-bluet">
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
      const label = labels.find((label) => label.value === row.original.label);

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
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("priority")
      );

      if (!priority) {
        return null;
      }

      return (
        <div className="flex items-center">
          <div className="flex items-center w-full ">
            <section
              className={`${priority.color} flex items-center px-2 py-1 rounded-full  text-[10px] font-semibold`}
            >
              {priority.icon && <priority.icon className=" mr-1 h-3 w-3" />}
              <span className="text-[10px]">{priority.label}</span>
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
