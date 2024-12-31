import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfileBaseFilter, KalturaConversionProfileBaseFilterArgs } from './KalturaConversionProfileBaseFilter';
export interface KalturaConversionProfileFilterArgs extends KalturaConversionProfileBaseFilterArgs {
}
export declare class KalturaConversionProfileFilter extends KalturaConversionProfileBaseFilter {
    constructor(data?: KalturaConversionProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
