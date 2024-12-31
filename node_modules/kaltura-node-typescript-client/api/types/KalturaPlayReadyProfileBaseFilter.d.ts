import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfileFilter, KalturaDrmProfileFilterArgs } from './KalturaDrmProfileFilter';
export interface KalturaPlayReadyProfileBaseFilterArgs extends KalturaDrmProfileFilterArgs {
}
export declare class KalturaPlayReadyProfileBaseFilter extends KalturaDrmProfileFilter {
    constructor(data?: KalturaPlayReadyProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
