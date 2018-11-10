import { FormPartInterface } from "./FormPartInterface";

export interface FormInterface {
  name: string;
  parts: FormPartInterface[];
  entityName?: string;
  defaultModel?: any;
}
