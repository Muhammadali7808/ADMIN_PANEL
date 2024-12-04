import React from "react";
import { AppstoreAddOutlined, FileTextOutlined, TagOutlined  } from "@ant-design/icons";

interface LayoutData {
  id: number;
  label: string;
  path: string;
  icon: React.ComponentType;
}

export const LayoutData: LayoutData[] = [
  {
    id: 1,
    label: "Category List",
    path: "/app",
    icon: FileTextOutlined,
  },
  {
    id: 2,
    label: "Sub Category List",
    path: "/app/sub-category",
    icon: AppstoreAddOutlined,
  },
  {
    id: 3,
    label: "Brand List",
    path: "/app/brand",
    icon: TagOutlined,
  }
];