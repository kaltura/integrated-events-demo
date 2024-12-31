import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionParamsBaseFilter, KalturaCaptionParamsBaseFilterArgs } from './KalturaCaptionParamsBaseFilter';
export interface KalturaCaptionParamsFilterArgs extends KalturaCaptionParamsBaseFilterArgs {
}
export declare class KalturaCaptionParamsFilter extends KalturaCaptionParamsBaseFilter {
    constructor(data?: KalturaCaptionParamsFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
