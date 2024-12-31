import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPartnerStatisticsArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaPartnerStatistics extends KalturaObjectBase {
    readonly packageBandwidthAndStorage: number;
    readonly hosting: number;
    readonly bandwidth: number;
    readonly usage: number;
    readonly usagePercent: number;
    readonly reachedLimitDate: number;
    constructor(data?: KalturaPartnerStatisticsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
