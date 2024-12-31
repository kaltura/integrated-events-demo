import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaUverseClickToOrderDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaUverseClickToOrderDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaUverseClickToOrderDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
