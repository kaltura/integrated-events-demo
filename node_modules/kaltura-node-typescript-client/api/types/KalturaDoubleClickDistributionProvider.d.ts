import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaDoubleClickDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaDoubleClickDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaDoubleClickDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
