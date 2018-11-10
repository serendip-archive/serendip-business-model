import { DashboardWidgetInterface } from "./DashboardWidgetInterface";

export interface DashboardTabInterface {
    title?: string;
    icon?: string;
    active?: boolean;
    widgets?: DashboardWidgetInterface[];
  }
  