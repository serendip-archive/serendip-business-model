
export interface ReportQueryInterface {

    method: string | 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'nin' | 'in';

    property: string;

    value: any;
    
}