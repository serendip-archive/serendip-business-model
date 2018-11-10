import { DashboardContainerInterface } from "./DashboardContainerInterface";

export interface DashboardGridInterface {
    containers: DashboardContainerInterface[];
    version?: number;
  }