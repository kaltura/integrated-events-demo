import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfileField } from './KalturaMetadataProfileField';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaMetadataProfileFieldListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaMetadataProfileFieldListResponse extends KalturaListResponse {
    readonly objects: KalturaMetadataProfileField[];
    constructor(data?: KalturaMetadataProfileFieldListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
