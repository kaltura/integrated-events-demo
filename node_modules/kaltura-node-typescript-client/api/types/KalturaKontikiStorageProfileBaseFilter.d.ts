import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfileFilter, KalturaStorageProfileFilterArgs } from './KalturaStorageProfileFilter';
export interface KalturaKontikiStorageProfileBaseFilterArgs extends KalturaStorageProfileFilterArgs {
}
export declare class KalturaKontikiStorageProfileBaseFilter extends KalturaStorageProfileFilter {
    constructor(data?: KalturaKontikiStorageProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
