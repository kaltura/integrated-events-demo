import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHuluDistributionProfileBaseFilter, KalturaHuluDistributionProfileBaseFilterArgs } from './KalturaHuluDistributionProfileBaseFilter';
export interface KalturaHuluDistributionProfileFilterArgs extends KalturaHuluDistributionProfileBaseFilterArgs {
}
export declare class KalturaHuluDistributionProfileFilter extends KalturaHuluDistributionProfileBaseFilter {
    constructor(data?: KalturaHuluDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
