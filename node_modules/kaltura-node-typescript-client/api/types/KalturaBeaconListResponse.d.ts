import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBeacon } from './KalturaBeacon';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaBeaconListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaBeaconListResponse extends KalturaListResponse {
    readonly objects: KalturaBeacon[];
    constructor(data?: KalturaBeaconListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
