import Comments from ".";
import { AppstoreOutlined } from "@ant-design/icons";
export const commentsRoute = [
  {
    key: "/comments",
    Element: Comments,
    label: "Comments",
    icon: AppstoreOutlined,
    children: [],
    visible: true,
    access: "main",
  },
];
