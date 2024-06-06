import { CarOutlined } from "@ant-design/icons";
import Cars from ".";

export const carsRoute = [
  {
    key: "/cars",
    Element: Cars,
    label: "Cars",
    icon: CarOutlined,
    children: [],
    visible: true,
    access: "main",
  },
];
