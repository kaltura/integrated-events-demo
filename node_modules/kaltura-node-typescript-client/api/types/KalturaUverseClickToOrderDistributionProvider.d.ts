import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaUverseClickToOrderDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaUverseClickToOrderDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaUverseClickToOrderDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
