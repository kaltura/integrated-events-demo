import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVarPartnerUsageItem, KalturaVarPartnerUsageItemArgs } from './KalturaVarPartnerUsageItem';
export interface KalturaVarPartnerUsageTotalItemArgs extends KalturaVarPartnerUsageItemArgs {
}
export declare class KalturaVarPartnerUsageTotalItem extends KalturaVarPartnerUsageItem {
    constructor(data?: KalturaVarPartnerUsageTotalItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
