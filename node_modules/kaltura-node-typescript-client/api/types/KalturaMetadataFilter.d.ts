import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataBaseFilter, KalturaMetadataBaseFilterArgs } from './KalturaMetadataBaseFilter';
export interface KalturaMetadataFilterArgs extends KalturaMetadataBaseFilterArgs {
}
export declare class KalturaMetadataFilter extends KalturaMetadataBaseFilter {
    constructor(data?: KalturaMetadataFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
