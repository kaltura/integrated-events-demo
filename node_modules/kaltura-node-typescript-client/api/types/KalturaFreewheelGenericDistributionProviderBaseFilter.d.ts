import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaFreewheelGenericDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaFreewheelGenericDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaFreewheelGenericDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
