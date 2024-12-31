import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaFreewheelDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaFreewheelDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaFreewheelDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
