import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaNdnDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaNdnDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaNdnDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
