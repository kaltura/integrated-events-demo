import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaUnicornDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaUnicornDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaUnicornDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
