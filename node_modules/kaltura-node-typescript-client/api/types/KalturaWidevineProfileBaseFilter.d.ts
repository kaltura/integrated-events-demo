import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfileFilter, KalturaDrmProfileFilterArgs } from './KalturaDrmProfileFilter';
export interface KalturaWidevineProfileBaseFilterArgs extends KalturaDrmProfileFilterArgs {
}
export declare class KalturaWidevineProfileBaseFilter extends KalturaDrmProfileFilter {
    constructor(data?: KalturaWidevineProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
