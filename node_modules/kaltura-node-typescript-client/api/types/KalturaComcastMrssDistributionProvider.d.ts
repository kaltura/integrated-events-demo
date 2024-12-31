import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaComcastMrssDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaComcastMrssDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaComcastMrssDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
