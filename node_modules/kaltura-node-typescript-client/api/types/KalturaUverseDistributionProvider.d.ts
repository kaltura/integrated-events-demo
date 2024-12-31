import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaUverseDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaUverseDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaUverseDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
