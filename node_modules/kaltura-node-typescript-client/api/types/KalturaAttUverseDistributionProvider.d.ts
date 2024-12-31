import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaAttUverseDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaAttUverseDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaAttUverseDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
