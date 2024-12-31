import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaQuickPlayDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaQuickPlayDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaQuickPlayDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
