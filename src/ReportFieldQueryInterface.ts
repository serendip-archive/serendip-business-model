export interface ReportFieldQueryInterface {
  method: string | "eq" | "neq" | "lt" | "lte" | "gt" | "gte" | "in" | "nin";

  methodOptions?: any;

  methodInput?: any;
  label: string;
}
