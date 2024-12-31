import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaIdeticDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaIdeticDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaIdeticDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
