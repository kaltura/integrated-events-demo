import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUverseClickToOrderDistributionProfileBaseFilter, KalturaUverseClickToOrderDistributionProfileBaseFilterArgs } from './KalturaUverseClickToOrderDistributionProfileBaseFilter';
export interface KalturaUverseClickToOrderDistributionProfileFilterArgs extends KalturaUverseClickToOrderDistributionProfileBaseFilterArgs {
}
export declare class KalturaUverseClickToOrderDistributionProfileFilter extends KalturaUverseClickToOrderDistributionProfileBaseFilter {
    constructor(data?: KalturaUverseClickToOrderDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
