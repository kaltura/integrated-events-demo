import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaAvnDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaAvnDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaAvnDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
