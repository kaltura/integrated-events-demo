import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyProfileBaseFilter, KalturaPlayReadyProfileBaseFilterArgs } from './KalturaPlayReadyProfileBaseFilter';
export interface KalturaPlayReadyProfileFilterArgs extends KalturaPlayReadyProfileBaseFilterArgs {
}
export declare class KalturaPlayReadyProfileFilter extends KalturaPlayReadyProfileBaseFilter {
    constructor(data?: KalturaPlayReadyProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
