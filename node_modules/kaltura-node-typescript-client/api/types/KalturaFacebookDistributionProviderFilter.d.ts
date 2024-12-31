import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFacebookDistributionProviderBaseFilter, KalturaFacebookDistributionProviderBaseFilterArgs } from './KalturaFacebookDistributionProviderBaseFilter';
export interface KalturaFacebookDistributionProviderFilterArgs extends KalturaFacebookDistributionProviderBaseFilterArgs {
}
export declare class KalturaFacebookDistributionProviderFilter extends KalturaFacebookDistributionProviderBaseFilter {
    constructor(data?: KalturaFacebookDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
