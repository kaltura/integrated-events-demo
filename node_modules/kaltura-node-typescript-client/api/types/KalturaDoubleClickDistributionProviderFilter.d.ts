import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDoubleClickDistributionProviderBaseFilter, KalturaDoubleClickDistributionProviderBaseFilterArgs } from './KalturaDoubleClickDistributionProviderBaseFilter';
export interface KalturaDoubleClickDistributionProviderFilterArgs extends KalturaDoubleClickDistributionProviderBaseFilterArgs {
}
export declare class KalturaDoubleClickDistributionProviderFilter extends KalturaDoubleClickDistributionProviderBaseFilter {
    constructor(data?: KalturaDoubleClickDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
