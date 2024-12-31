import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaSynacorHboDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaSynacorHboDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaSynacorHboDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
