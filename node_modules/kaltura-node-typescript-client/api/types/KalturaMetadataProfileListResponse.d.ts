import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaMetadataProfileListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaMetadataProfileListResponse extends KalturaListResponse {
    readonly objects: KalturaMetadataProfile[];
    constructor(data?: KalturaMetadataProfileListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
