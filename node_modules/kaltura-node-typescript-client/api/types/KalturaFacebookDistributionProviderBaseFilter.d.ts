import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaFacebookDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaFacebookDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaFacebookDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
