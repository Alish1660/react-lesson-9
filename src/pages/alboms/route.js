import { AppstoreOutlined } from "@ant-design/icons";
import Albom from ".";

export const albomRoute = [
  {
    key: "/albom",
    Element: Albom,
    label: "Albom",
    icon: AppstoreOutlined,
    children: [],
    visible: true,
    access: "main",
  },
];
