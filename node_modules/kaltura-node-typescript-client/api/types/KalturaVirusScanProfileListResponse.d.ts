import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirusScanProfile } from './KalturaVirusScanProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaVirusScanProfileListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaVirusScanProfileListResponse extends KalturaListResponse {
    readonly objects: KalturaVirusScanProfile[];
    constructor(data?: KalturaVirusScanProfileListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
