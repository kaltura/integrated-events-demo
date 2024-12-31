import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVerizonVcastDistributionProviderBaseFilter, KalturaVerizonVcastDistributionProviderBaseFilterArgs } from './KalturaVerizonVcastDistributionProviderBaseFilter';
export interface KalturaVerizonVcastDistributionProviderFilterArgs extends KalturaVerizonVcastDistributionProviderBaseFilterArgs {
}
export declare class KalturaVerizonVcastDistributionProviderFilter extends KalturaVerizonVcastDistributionProviderBaseFilter {
    constructor(data?: KalturaVerizonVcastDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
