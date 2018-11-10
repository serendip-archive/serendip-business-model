import { DashboardTabInterface } from "./DashboardTabInterface";

export interface DashboardSectionInterface {
    name?: string;
    title?: string;
    icon?: string;
    tabs?: DashboardTabInterface[];
    toggleUl?: boolean;
  }