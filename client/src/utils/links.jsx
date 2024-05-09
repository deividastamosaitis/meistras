import React from "react";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  {
    text: "Pridėti objektą",
    path: ".",
    icon: <FaWpforms />,
  },
  {
    text: "Visi objektai",
    path: "all-jobs",
    icon: <FaTasks />,
  },
  {
    text: "Žemėlapis",
    path: "zemelapis-objektu",
    icon: <FaMapMarkerAlt />,
  },
  {
    text: "Darbai",
    path: "darbas",
    icon: <IoCalendarNumberOutline />,
  },
  // {
  //   text: 'Profilis',
  //   path: 'profile',
  //   icon: <ImProfile />,
  // },
  // {
  //   text: 'Admin',
  //   path: 'admin',
  //   icon: <MdAdminPanelSettings />,
  // },
];

export default links;
