
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
HiOutlineBuildingOffice ,
HiOutlineCubeTransparent,
  HiOutlineCodeBracket,
  HiMiniXCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";

export const iconFormasi = {
  "Teknisi Jaringan": HiMiniSignal,
  "Perawat": HiOutlineEyeDropper,
  "Pemulasaran Jenazah": HiOutlineCubeTransparent,
  "Pengelola Rumah Tangga": HiOutlineBuildingOffice,
};

export const statusMap = {
  Lulus: { icon: HiMiniCheckBadge, color: "text-green-600 bg-green-100" },
  Proses: { icon: HiMiniClock, color: "text-yellow-600 bg-yellow-100" },
  Ditolak: { icon: HiMiniXCircle, color: "text-red-600 bg-red-100" },
  Warning: {
    icon: HiOutlineExclamationCircle,
    color: "text-orange-600 bg-orange-100",
  },
  // Tambahkan status lainnya sesuai kebutuhan
};