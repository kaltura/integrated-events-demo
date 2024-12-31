import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaHuluDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaHuluDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaHuluDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
