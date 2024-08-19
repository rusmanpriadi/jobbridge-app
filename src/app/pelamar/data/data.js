
import { MdAnalytics  } from "react-icons/md";
import {
  HiOutlineViewColumns,
  HiMiniSignal,
  HiOutlineCube,
  HiOutlineCheck,
  HiOutlineEyeDropper,
  HiOutlineFunnel,
  HiOutlineBeaker,
  HiMiniCheckBadge,
  HiMiniClock,
  HiMiniXCircle,
} from "react-icons/hi2";
import { TbPointFilled } from "react-icons/tb";

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

export const formasis = [
  {
    value: "teknisijaringan",
    label: "Teknisi Jaringan",
    icon: HiMiniSignal,
  },
  {
    value: "todo",
    label: "Perawat",
    icon: HiOutlineEyeDropper,
  },
  {
    value: "in progress",
    label: "Apoteker",
    icon: HiOutlineBeaker,
  },
  {
    value: "done",
    label: "Rumah Tangga",
    icon: HiOutlineFunnel,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: HiOutlineCube,
  },
];

export const priorities = [
  {
    label: "Proses",
    value: "low",
    icon: HiMiniClock,
    color: "bg-orange-100 text-orange-600",
  },
  {
    label: "Gugur",
    value: "medium",
    icon: HiMiniXCircle,
    color: "bg-red-100 text-red-600",
  },
  {
    label: "Lulus",
    value: "high",
    icon: HiMiniCheckBadge,
    color: "bg-green-100 text-green-600",
  },
];
