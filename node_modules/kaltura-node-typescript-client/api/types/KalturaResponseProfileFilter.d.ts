import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfileBaseFilter, KalturaResponseProfileBaseFilterArgs } from './KalturaResponseProfileBaseFilter';
export interface KalturaResponseProfileFilterArgs extends KalturaResponseProfileBaseFilterArgs {
}
export declare class KalturaResponseProfileFilter extends KalturaResponseProfileBaseFilter {
    constructor(data?: KalturaResponseProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
