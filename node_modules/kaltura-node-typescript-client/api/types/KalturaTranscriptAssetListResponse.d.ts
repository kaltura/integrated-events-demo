import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTranscriptAsset } from './KalturaTranscriptAsset';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaTranscriptAssetListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaTranscriptAssetListResponse extends KalturaListResponse {
    readonly objects: KalturaTranscriptAsset[];
    constructor(data?: KalturaTranscriptAssetListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
