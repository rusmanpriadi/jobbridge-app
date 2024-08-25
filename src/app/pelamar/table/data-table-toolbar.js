"use client";

import React, { useState, useEffect } from "react";
import { MdAnalytics } from "react-icons/md";
import {
  HiOutlineTicket,
  HiOutlineCodeBracketSquare,
  HiOutlineTrash,
} from "react-icons/hi2";
import { Table } from "@tanstack/react-table";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { DataTableViewOptions } from "../../../components/table/data-table-view-options";
import { DataTableFacetedFilter } from "../../../components/table/data-table-faceted-filter";

export function DataTableToolbar({ table }) {
  const [filterMap, setfilterMap] = useState([]);
  
  const isFiltered = table.getState().columnFilters.length > 0;
 useEffect(() => {
   // Fetch data formasi from API
   fetch("http://127.0.0.1:8000/api/pelamar")
     .then((response) => response.json())
     .then((data) => setfilterMap(data))
     .catch((error) => console.error("Error fetching formasi:", error));
 }, []);
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={table.getColumn("name")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("formasi") && (
          <DataTableFacetedFilter
            column={table.getColumn("formasi")}
            title="Formasi"
            options={filterMap.map((f) => ({
              value: f.formasi,
              label: f.formasi,
            }))}
            icont={<HiOutlineTicket />}
          />
        )}
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={filterMap.map((f) => ({
              value: f.status,
              label: f.status,
            }))}
            icont={<HiOutlineCodeBracketSquare />}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3 text-xs"
          >
            Reset
            <HiOutlineTrash className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
