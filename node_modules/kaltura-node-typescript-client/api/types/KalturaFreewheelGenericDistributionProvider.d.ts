import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaFreewheelGenericDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaFreewheelGenericDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaFreewheelGenericDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
