import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartner } from './KalturaPartner';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaPartnerListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaPartnerListResponse extends KalturaListResponse {
    readonly objects: KalturaPartner[];
    constructor(data?: KalturaPartnerListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
