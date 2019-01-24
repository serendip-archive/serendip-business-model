import { ValidationErrorInterface } from "./ValidationErrorInterface";

export class UserProfileModel {
  static async validate(model: UserProfileModel): Promise<void> {
    var errs: ValidationErrorInterface[] = [];

    if (errs && errs.length > 0) throw errs;
  }

  oid?: string;

  _id?: string;

  firstName: string;
  lastName: string;
  profilePicture: string;

  gender: string;
}
