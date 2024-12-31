import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderType } from './KalturaDistributionProviderType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaDistributionProviderBaseFilterArgs extends KalturaFilterArgs {
    typeEqual?: KalturaDistributionProviderType;
    typeIn?: string;
}
export declare class KalturaDistributionProviderBaseFilter extends KalturaFilter {
    typeEqual: KalturaDistributionProviderType;
    typeIn: string;
    constructor(data?: KalturaDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
