import { DashboardTabInterface } from "./DashboardTabInterface";

export interface DashboardContainerInterface {
    showTabs?: boolean;
    tabs: DashboardTabInterface[];
  }