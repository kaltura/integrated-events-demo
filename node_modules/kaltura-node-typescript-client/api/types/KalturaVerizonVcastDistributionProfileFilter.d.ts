import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVerizonVcastDistributionProfileBaseFilter, KalturaVerizonVcastDistributionProfileBaseFilterArgs } from './KalturaVerizonVcastDistributionProfileBaseFilter';
export interface KalturaVerizonVcastDistributionProfileFilterArgs extends KalturaVerizonVcastDistributionProfileBaseFilterArgs {
}
export declare class KalturaVerizonVcastDistributionProfileFilter extends KalturaVerizonVcastDistributionProfileBaseFilter {
    constructor(data?: KalturaVerizonVcastDistributionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
