import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaTimeWarnerDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaTimeWarnerDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaTimeWarnerDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
