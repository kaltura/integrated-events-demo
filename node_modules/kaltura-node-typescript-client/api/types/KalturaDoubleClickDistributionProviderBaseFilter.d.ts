import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaDoubleClickDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaDoubleClickDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaDoubleClickDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
