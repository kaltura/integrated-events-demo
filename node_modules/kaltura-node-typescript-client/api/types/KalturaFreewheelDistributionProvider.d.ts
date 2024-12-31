import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaFreewheelDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaFreewheelDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaFreewheelDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
