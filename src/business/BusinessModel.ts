import { BusinessMemberModel } from ".";

export class BusinessModel {
  _id?: string;
  title: string;
  owner: string;
  subDomain: string;
  domain: string;
  members: BusinessMemberModel[];

  mails: string[];
  // user's groups name
  groups: string[];

  description: string;
  logo: string;

  clients: string[];
  crmailDomains: string[];

  static async validate(model: BusinessModel) {
    if (!model) throw new Error("model empty");

    if (!model.title) throw new Error("model.title required");

    if (!model.owner) throw new Error("model.owner required");
  }
}
