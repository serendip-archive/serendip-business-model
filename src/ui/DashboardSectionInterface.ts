import { DashboardTabInterface } from ".";

export interface DashboardSectionInterface {
    name?: string;
    title?: string;
    icon?: string;
    tabs?: DashboardTabInterface[];
    toggleUl?: boolean;
    product : string;
  }