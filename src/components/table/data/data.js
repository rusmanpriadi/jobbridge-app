
import { MdAnalytics } from "react-icons/md";
import {
  HiOutlineViewColumns,
  HiMiniSignal,
  HiOutlineCube,
} from "react-icons/hi2";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
  {
    value: "backlog",
    label: "Teknisi Jaringan",
    icon: HiMiniSignal,
  },
  {
    value: "todo",
    label: "Todo",
    icon: HiOutlineCube ,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: HiOutlineCube ,
  },
  {
    value: "done",
    label: "Done",
    icon: HiOutlineCube ,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: HiOutlineCube ,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: MdAnalytics,
  },
  {
    label: "Medium",
    value: "medium",
    icon: MdAnalytics,
  },
  {
    label: "High",
    value: "high",
    icon: MdAnalytics,
  },
];
