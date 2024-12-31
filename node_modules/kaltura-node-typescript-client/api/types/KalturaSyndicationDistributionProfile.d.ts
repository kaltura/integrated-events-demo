import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfile, KalturaDistributionProfileArgs } from './KalturaDistributionProfile';
export interface KalturaSyndicationDistributionProfileArgs extends KalturaDistributionProfileArgs {
    xsl?: string;
}
export declare class KalturaSyndicationDistributionProfile extends KalturaDistributionProfile {
    xsl: string;
    readonly feedId: string;
    constructor(data?: KalturaSyndicationDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
