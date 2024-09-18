import { MdAnalytics } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import {
  PiListChecksFill,
  PiListMagnifyingGlassBold,
  PiCardholderFill,
  PiWaveTriangleFill,

} from "react-icons/pi";
import { HiCreditCard, HiHome  } from "react-icons/hi2";
const ClientData = [
  {
    name: "",
    menuItems: [
      {
        icon: <HiHome  />,
        label: "Home",
        route: "/home",
      },
      {
        icon: <HiCreditCard />,
        label: "Data Diri",
        route: "/data-diri",
      },
      {
        icon: <FaUsers />,
        label: "Formasi",
        route: "/list-formasi",
      },
      {
        icon: <PiListChecksFill />,
        label: "Berkas",
        route: "/berkas",
      },
      {
        icon: <PiListMagnifyingGlassBold />,
        label: "Resume",
        route: "/resume",
      },
    ],
  },
];

export default ClientData;
