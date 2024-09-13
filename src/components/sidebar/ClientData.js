import { MdAnalytics } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import {
  PiListChecksFill,
  PiListMagnifyingGlassBold,
  PiCardholderFill,
  PiWaveTriangleFill,
} from "react-icons/pi";

const ClientData = [
  {
    name: "",
    menuItems: [
      {
        icon: <MdAnalytics />,
        label: "Home",
        route: "/home",
      },
      {
        icon: <FaUsers />,
        label: "Formasi",
        route: "/pilih-formasi",
      },
      {
        icon: <PiListChecksFill />,
        label: "Berkas",
        route: "/berkas",
      },
      {
        icon: <PiListMagnifyingGlassBold />,
        label: "Resume",
        route: "#",
      },
      
    ],
  },

];

export default ClientData;
