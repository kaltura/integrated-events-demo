import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaTVComDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaTVComDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaTVComDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
