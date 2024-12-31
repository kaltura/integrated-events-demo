import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaIdeticDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaIdeticDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaIdeticDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
