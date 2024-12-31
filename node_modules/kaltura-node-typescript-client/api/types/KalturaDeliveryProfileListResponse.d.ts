import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfile } from './KalturaDeliveryProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaDeliveryProfileListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaDeliveryProfileListResponse extends KalturaListResponse {
    readonly objects: KalturaDeliveryProfile[];
    constructor(data?: KalturaDeliveryProfileListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
