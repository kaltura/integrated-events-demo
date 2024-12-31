import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUverseClickToOrderDistributionProviderBaseFilter, KalturaUverseClickToOrderDistributionProviderBaseFilterArgs } from './KalturaUverseClickToOrderDistributionProviderBaseFilter';
export interface KalturaUverseClickToOrderDistributionProviderFilterArgs extends KalturaUverseClickToOrderDistributionProviderBaseFilterArgs {
}
export declare class KalturaUverseClickToOrderDistributionProviderFilter extends KalturaUverseClickToOrderDistributionProviderBaseFilter {
    constructor(data?: KalturaUverseClickToOrderDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
