import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaMetroPcsDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaMetroPcsDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaMetroPcsDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
