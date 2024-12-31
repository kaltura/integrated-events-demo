import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaVerizonVcastDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
}
export declare class KalturaVerizonVcastDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    constructor(data?: KalturaVerizonVcastDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
