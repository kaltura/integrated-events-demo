import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaKontikiStorageProfileBaseFilter, KalturaKontikiStorageProfileBaseFilterArgs } from './KalturaKontikiStorageProfileBaseFilter';
export interface KalturaKontikiStorageProfileFilterArgs extends KalturaKontikiStorageProfileBaseFilterArgs {
}
export declare class KalturaKontikiStorageProfileFilter extends KalturaKontikiStorageProfileBaseFilter {
    constructor(data?: KalturaKontikiStorageProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
