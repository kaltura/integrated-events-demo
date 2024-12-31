import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfileBaseFilter, KalturaDrmProfileBaseFilterArgs } from './KalturaDrmProfileBaseFilter';
export interface KalturaDrmProfileFilterArgs extends KalturaDrmProfileBaseFilterArgs {
}
export declare class KalturaDrmProfileFilter extends KalturaDrmProfileBaseFilter {
    constructor(data?: KalturaDrmProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
