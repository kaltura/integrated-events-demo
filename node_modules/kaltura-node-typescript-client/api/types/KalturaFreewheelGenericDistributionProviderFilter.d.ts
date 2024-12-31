import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFreewheelGenericDistributionProviderBaseFilter, KalturaFreewheelGenericDistributionProviderBaseFilterArgs } from './KalturaFreewheelGenericDistributionProviderBaseFilter';
export interface KalturaFreewheelGenericDistributionProviderFilterArgs extends KalturaFreewheelGenericDistributionProviderBaseFilterArgs {
}
export declare class KalturaFreewheelGenericDistributionProviderFilter extends KalturaFreewheelGenericDistributionProviderBaseFilter {
    constructor(data?: KalturaFreewheelGenericDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
