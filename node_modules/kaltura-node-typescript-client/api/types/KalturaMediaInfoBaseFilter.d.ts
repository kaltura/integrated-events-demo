import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaMediaInfoBaseFilterArgs extends KalturaFilterArgs {
    flavorAssetIdEqual?: string;
}
export declare class KalturaMediaInfoBaseFilter extends KalturaFilter {
    flavorAssetIdEqual: string;
    constructor(data?: KalturaMediaInfoBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
