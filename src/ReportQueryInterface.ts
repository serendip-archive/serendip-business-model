 
export interface ReportQueryInterface {

    condition: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'nin' | 'in' | 'method';

    method: string;

    property: string;

    propertyType: string;

    value: any;
}