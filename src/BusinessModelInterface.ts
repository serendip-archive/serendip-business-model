import { ValidationErrorInterface } from ".";

export interface BusinessModelInterface {

  _id?: string;

  /**
   * related _business
   */
  _business: string;



  /**
   * model validation
   */
  validate?(model: any): Promise<ValidationErrorInterface[]>;

}