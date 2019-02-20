import { DashboardWidgetInterface } from ".";

export interface DashboardTabInterface {
  status?: string | "pinned" | "default";

  title?: string;
  icon?: string;
  active?: boolean;
  widgets?: DashboardWidgetInterface[];
  widget?: DashboardWidgetInterface;
}
