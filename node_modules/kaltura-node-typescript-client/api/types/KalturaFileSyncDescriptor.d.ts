import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaFileSyncDescriptorArgs extends KalturaObjectBaseArgs {
    fileSyncLocalPath?: string;
    fileEncryptionKey?: string;
    fileSyncRemoteUrl?: string;
    fileSyncObjectSubType?: number;
}
export declare class KalturaFileSyncDescriptor extends KalturaObjectBase {
    fileSyncLocalPath: string;
    fileEncryptionKey: string;
    fileSyncRemoteUrl: string;
    fileSyncObjectSubType: number;
    constructor(data?: KalturaFileSyncDescriptorArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
