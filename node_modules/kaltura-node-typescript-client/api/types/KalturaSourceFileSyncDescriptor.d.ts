import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileSyncDescriptor, KalturaFileSyncDescriptorArgs } from './KalturaFileSyncDescriptor';
export interface KalturaSourceFileSyncDescriptorArgs extends KalturaFileSyncDescriptorArgs {
    actualFileSyncLocalPath?: string;
    assetId?: string;
    assetParamsId?: number;
}
export declare class KalturaSourceFileSyncDescriptor extends KalturaFileSyncDescriptor {
    actualFileSyncLocalPath: string;
    assetId: string;
    assetParamsId: number;
    constructor(data?: KalturaSourceFileSyncDescriptorArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
