import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPartnerUsageArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaPartnerUsage extends KalturaObjectBase {
    readonly hostingGB: number;
    readonly Percent: number;
    readonly packageBW: number;
    readonly usageGB: number;
    readonly reachedLimitDate: number;
    readonly usageGraph: string;
    constructor(data?: KalturaPartnerUsageArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
