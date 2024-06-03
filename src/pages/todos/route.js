import { AppstoreOutlined } from "@ant-design/icons";
import Todos from ".";

export const todosRoute = [
  {
    key: "/todos",
    Element: Todos,
    label: "Todos",
    icon: AppstoreOutlined,
    children: [],
    visible: true,
    access: "main",
  },
];
