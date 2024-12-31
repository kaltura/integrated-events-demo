import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTranscriptAssetBaseFilter, KalturaTranscriptAssetBaseFilterArgs } from './KalturaTranscriptAssetBaseFilter';
export interface KalturaTranscriptAssetFilterArgs extends KalturaTranscriptAssetBaseFilterArgs {
}
export declare class KalturaTranscriptAssetFilter extends KalturaTranscriptAssetBaseFilter {
    constructor(data?: KalturaTranscriptAssetFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
