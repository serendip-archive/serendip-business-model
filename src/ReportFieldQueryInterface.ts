export interface ReportFieldQueryInterface {
  enabled?: boolean;
  method: string | "eq" | "neq" | "lt" | "lte" | "gt" | "gte" | "in" | "nin";

  methodOptions?: any;

  methodInput?: any;
  methodInputForm?: string;

  label: string;
}
