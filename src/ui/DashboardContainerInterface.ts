import { DashboardTabInterface } from ".";

export interface DashboardContainerInterface {
    showTabs?: boolean;
    tabs: DashboardTabInterface[];
  }