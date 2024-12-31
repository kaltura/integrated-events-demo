import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchOperator, KalturaSearchOperatorArgs } from './KalturaSearchOperator';
export interface KalturaDynamicObjectSearchItemArgs extends KalturaSearchOperatorArgs {
    field?: string;
}
export declare class KalturaDynamicObjectSearchItem extends KalturaSearchOperator {
    field: string;
    constructor(data?: KalturaDynamicObjectSearchItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
