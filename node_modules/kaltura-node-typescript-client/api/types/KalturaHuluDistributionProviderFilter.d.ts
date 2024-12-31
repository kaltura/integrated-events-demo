import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHuluDistributionProviderBaseFilter, KalturaHuluDistributionProviderBaseFilterArgs } from './KalturaHuluDistributionProviderBaseFilter';
export interface KalturaHuluDistributionProviderFilterArgs extends KalturaHuluDistributionProviderBaseFilterArgs {
}
export declare class KalturaHuluDistributionProviderFilter extends KalturaHuluDistributionProviderBaseFilter {
    constructor(data?: KalturaHuluDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
