import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileSyncDescriptor, KalturaFileSyncDescriptorArgs } from './KalturaFileSyncDescriptor';
export interface KalturaDestFileSyncDescriptorArgs extends KalturaFileSyncDescriptorArgs {
}
export declare class KalturaDestFileSyncDescriptor extends KalturaFileSyncDescriptor {
    constructor(data?: KalturaDestFileSyncDescriptorArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
