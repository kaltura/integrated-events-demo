import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaHuluDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaHuluDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaHuluDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
