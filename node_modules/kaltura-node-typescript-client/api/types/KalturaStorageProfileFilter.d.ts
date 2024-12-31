import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfileBaseFilter, KalturaStorageProfileBaseFilterArgs } from './KalturaStorageProfileBaseFilter';
export interface KalturaStorageProfileFilterArgs extends KalturaStorageProfileBaseFilterArgs {
}
export declare class KalturaStorageProfileFilter extends KalturaStorageProfileBaseFilter {
    constructor(data?: KalturaStorageProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
