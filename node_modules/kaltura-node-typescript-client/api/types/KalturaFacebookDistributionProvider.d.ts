import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaFacebookDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaFacebookDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaFacebookDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
