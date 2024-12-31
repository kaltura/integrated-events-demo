import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfileBaseFilter, KalturaMetadataProfileBaseFilterArgs } from './KalturaMetadataProfileBaseFilter';
export interface KalturaMetadataProfileFilterArgs extends KalturaMetadataProfileBaseFilterArgs {
}
export declare class KalturaMetadataProfileFilter extends KalturaMetadataProfileBaseFilter {
    constructor(data?: KalturaMetadataProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
