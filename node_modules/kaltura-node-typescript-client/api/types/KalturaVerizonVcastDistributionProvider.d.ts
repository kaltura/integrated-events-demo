import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaVerizonVcastDistributionProviderArgs extends KalturaDistributionProviderArgs {
}
export declare class KalturaVerizonVcastDistributionProvider extends KalturaDistributionProvider {
    constructor(data?: KalturaVerizonVcastDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
