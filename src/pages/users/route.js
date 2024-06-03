import { AppstoreOutlined } from "@ant-design/icons";
import Users from ".";

export const usersRoute = [
  {
    key: "/users",
    Element: Users,
    label: "Users",
    icon: AppstoreOutlined,
    children: [],
    visible: true,
    access: "main",
  },
];
