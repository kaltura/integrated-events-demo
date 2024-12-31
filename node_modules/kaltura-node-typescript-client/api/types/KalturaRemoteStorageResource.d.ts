import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUrlResource, KalturaUrlResourceArgs } from './KalturaUrlResource';
export interface KalturaRemoteStorageResourceArgs extends KalturaUrlResourceArgs {
    storageProfileId?: number;
}
export declare class KalturaRemoteStorageResource extends KalturaUrlResource {
    storageProfileId: number;
    constructor(data?: KalturaRemoteStorageResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
