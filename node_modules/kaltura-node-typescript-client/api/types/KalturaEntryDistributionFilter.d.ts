import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistributionBaseFilter, KalturaEntryDistributionBaseFilterArgs } from './KalturaEntryDistributionBaseFilter';
export interface KalturaEntryDistributionFilterArgs extends KalturaEntryDistributionBaseFilterArgs {
}
export declare class KalturaEntryDistributionFilter extends KalturaEntryDistributionBaseFilter {
    constructor(data?: KalturaEntryDistributionFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
