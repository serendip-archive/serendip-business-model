export class EntityModel {

    // related _id  in businesses collection 
    _business?: string;
    _id?: string;

    _vdate: number;
    _cdate: number;
    _udate: number;
    _rdate: number;

    constructor(model: EntityModel) {

        this._business = model._business;
        this._id = model._id;
        this._rdate = model._rdate;
        this._udate = model._udate;
        this._vdate = model._vdate;
        this._cdate = model._cdate || Date.now();

    }

    static async validate(model) {

    }

}