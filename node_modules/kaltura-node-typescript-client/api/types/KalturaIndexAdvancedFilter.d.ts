import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';
export interface KalturaIndexAdvancedFilterArgs extends KalturaSearchItemArgs {
    indexIdGreaterThan?: number;
    depthGreaterThanEqual?: number;
}
export declare class KalturaIndexAdvancedFilter extends KalturaSearchItem {
    indexIdGreaterThan: number;
    depthGreaterThanEqual: number;
    constructor(data?: KalturaIndexAdvancedFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
