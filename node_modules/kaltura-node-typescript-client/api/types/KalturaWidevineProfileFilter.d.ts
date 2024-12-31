import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidevineProfileBaseFilter, KalturaWidevineProfileBaseFilterArgs } from './KalturaWidevineProfileBaseFilter';
export interface KalturaWidevineProfileFilterArgs extends KalturaWidevineProfileBaseFilterArgs {
}
export declare class KalturaWidevineProfileFilter extends KalturaWidevineProfileBaseFilter {
    constructor(data?: KalturaWidevineProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
