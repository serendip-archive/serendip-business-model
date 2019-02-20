export class EntityModel {
  // related _id  in businesses collection
  [key: string]: any;
  _business?: string;
  _id?: string;

  _vdate?: number;
  _cdate?: number;
  _udate?: number;
  _rdate?: number;

  _vuser?: string;
  _cuser?: string;
  _uuser?: string;
  _ruser?: string;
  _entity?: string;

  constructor(model: EntityModel) {
    this._business = model._business;

    if (model._id) this._id = model._id;

    this._rdate = model._rdate;
    this._udate = model._udate;
    this._vdate = model._vdate;
    this._cdate = model._cdate || Date.now();

    this._ruser = model._ruser;
    this._uuser = model._uuser;
    this._vuser = model._vuser;
    this._cuser = model._cuser;

    this._entity = model._entity;
  }

  static async validate(model) {}
}
