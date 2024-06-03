import { AppstoreOutlined } from "@ant-design/icons";
import Photos from ".";
export const photosRoute = [
  {
    key: "/photos",
    Element: Photos,
    label: "Photos",
    icon: AppstoreOutlined,
    children: [],
    visible: true,
    access: "main",
  },
];
