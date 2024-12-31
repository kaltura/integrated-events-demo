import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaMsnDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaMsnDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaMsnDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
