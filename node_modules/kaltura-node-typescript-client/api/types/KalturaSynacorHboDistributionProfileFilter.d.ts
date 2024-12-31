import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSynacorHboDistributionProfileBaseFilter, KalturaSynacorHboDistributionProfileBaseFilterArgs } from './KalturaSynacorHboDistributionProfileBaseFilter';
export interface KalturaSynacorHboDistributionProfileFilterArgs extends KalturaSynacorHboDistributionProfileBaseFilterArgs {
}
export declare class KalturaSynacorHboDistributionProfileFilter extends KalturaSynacorHboDistributionProfileBaseFilter {
    constructor(data?: KalturaSynacorHboDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
