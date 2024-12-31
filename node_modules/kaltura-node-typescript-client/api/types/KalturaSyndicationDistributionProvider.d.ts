import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaSyndicationDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaSyndicationDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaSyndicationDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
