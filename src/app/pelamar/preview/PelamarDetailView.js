import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "../../../components/ui/table";
import { Separator } from "../../../components/ui/separator";

const PelamarDetailView = ({
  tgl_lahir,
  email,
  formasi,
  nik,
  jenis_kelamin,
  phone,
  apply,
  status,
}) => {
  const information = [
    {
      inf: "NIK",
      value: nik,
    },
    {
      inf: "Email",
      value: email,
      color: "text-bluet ",
    },
    {
      inf: "Formasi",
      value: formasi,
    },
    {
      inf: "Tanggal Lahir",
      value: tgl_lahir,
    },
  ];
  const information2 = [
    {
      inf: "Phone",
      value: phone,
      color: "text-bluet ",
    },
    {
      inf: "Jenis Kelamin",
      value: jenis_kelamin,
    },
    {
      inf: "Apply",
      value: apply,
    },
    {
      inf: "Status",
      value: status,
    },
  ];
  return (
    <div className="mt-4">
      <h4 className="text-sm text-slate-600 px-5 font-semibold">Pelamar Detail</h4>
      <Table className="mt-3 w-full grid grid-cols-2 gap-4 px-5">
        <TableBody className="text-xs w-full">
          {information.map((info, index) => (
            <TableRow
              key={index}
              className="w-full flex justify-between items-center"
            >
              <TableCell className="font-medium text-muted-foreground p-0">
                {info.inf}
              </TableCell>
              <TableCell className={info.color}>{info.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody className="text-xs w-full">
          {information2.map((info, index) => (
            <TableRow
              key={index}
              className="w-full flex justify-between items-center"
            >
              <TableCell className="font-medium text-muted-foreground">
                {info.inf}
              </TableCell>
              <TableCell className={info.color}>{info.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Separator className="my-10" />
    </div>
  );
};

export default PelamarDetailView;
