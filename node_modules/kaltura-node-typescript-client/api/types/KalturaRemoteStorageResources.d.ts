import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRemoteStorageResource } from './KalturaRemoteStorageResource';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';
export interface KalturaRemoteStorageResourcesArgs extends KalturaContentResourceArgs {
    resources?: KalturaRemoteStorageResource[];
}
export declare class KalturaRemoteStorageResources extends KalturaContentResource {
    resources: KalturaRemoteStorageResource[];
    constructor(data?: KalturaRemoteStorageResourcesArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
