import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFreewheelDistributionProviderBaseFilter, KalturaFreewheelDistributionProviderBaseFilterArgs } from './KalturaFreewheelDistributionProviderBaseFilter';
export interface KalturaFreewheelDistributionProviderFilterArgs extends KalturaFreewheelDistributionProviderBaseFilterArgs {
}
export declare class KalturaFreewheelDistributionProviderFilter extends KalturaFreewheelDistributionProviderBaseFilter {
    constructor(data?: KalturaFreewheelDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
