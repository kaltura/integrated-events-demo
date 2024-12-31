import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaTvinciDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaTvinciDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaTvinciDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
