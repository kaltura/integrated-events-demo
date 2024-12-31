import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaCrossKalturaDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaCrossKalturaDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaCrossKalturaDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
