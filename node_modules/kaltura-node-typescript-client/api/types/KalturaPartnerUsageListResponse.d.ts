import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVarPartnerUsageItem } from './KalturaVarPartnerUsageItem';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaPartnerUsageListResponseArgs extends KalturaListResponseArgs {
    total?: KalturaVarPartnerUsageItem;
    objects?: KalturaVarPartnerUsageItem[];
}
export declare class KalturaPartnerUsageListResponse extends KalturaListResponse {
    total: KalturaVarPartnerUsageItem;
    objects: KalturaVarPartnerUsageItem[];
    constructor(data?: KalturaPartnerUsageListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
