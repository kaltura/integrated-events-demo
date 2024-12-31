import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfile, KalturaStorageProfileArgs } from './KalturaStorageProfile';
export interface KalturaKontikiStorageProfileArgs extends KalturaStorageProfileArgs {
    serviceToken?: string;
}
export declare class KalturaKontikiStorageProfile extends KalturaStorageProfile {
    serviceToken: string;
    constructor(data?: KalturaKontikiStorageProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
