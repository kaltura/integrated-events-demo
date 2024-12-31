import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadata } from './KalturaMetadata';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaMetadataListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaMetadataListResponse extends KalturaListResponse {
    readonly objects: KalturaMetadata[];
    constructor(data?: KalturaMetadataListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
