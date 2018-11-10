export interface FormPartInterface {
    componentName: string;
    propertyName: string;
    propertyType?: "string" | "boolean" | "number" | "array";
    inputs?: any;
  }
  