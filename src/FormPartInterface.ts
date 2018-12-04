import { FieldQueryInterface } from "./FieldQueryInterface";

export interface FormPartInterface {
  if?: string;
  componentName?: string;
  propertyName?: string;
  propertyType?: "array" | "object" | "string" | "boolean" | "number";
  inputs?: any;

  cssClass?: string;
  parts?: FormPartInterface[];
}
