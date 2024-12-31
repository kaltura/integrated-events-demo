import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIdeticDistributionProviderBaseFilter, KalturaIdeticDistributionProviderBaseFilterArgs } from './KalturaIdeticDistributionProviderBaseFilter';
export interface KalturaIdeticDistributionProviderFilterArgs extends KalturaIdeticDistributionProviderBaseFilterArgs {
}
export declare class KalturaIdeticDistributionProviderFilter extends KalturaIdeticDistributionProviderBaseFilter {
    constructor(data?: KalturaIdeticDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
