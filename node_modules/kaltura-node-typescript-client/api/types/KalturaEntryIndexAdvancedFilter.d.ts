import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIndexAdvancedFilter, KalturaIndexAdvancedFilterArgs } from './KalturaIndexAdvancedFilter';
export interface KalturaEntryIndexAdvancedFilterArgs extends KalturaIndexAdvancedFilterArgs {
}
export declare class KalturaEntryIndexAdvancedFilter extends KalturaIndexAdvancedFilter {
    constructor(data?: KalturaEntryIndexAdvancedFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
