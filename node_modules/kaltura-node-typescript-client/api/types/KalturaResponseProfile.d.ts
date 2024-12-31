import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfileStatus } from './KalturaResponseProfileStatus';
import { KalturaDetachedResponseProfile, KalturaDetachedResponseProfileArgs } from './KalturaDetachedResponseProfile';
export interface KalturaResponseProfileArgs extends KalturaDetachedResponseProfileArgs {
    systemName?: string;
}
export declare class KalturaResponseProfile extends KalturaDetachedResponseProfile {
    readonly id: number;
    systemName: string;
    readonly partnerId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly status: KalturaResponseProfileStatus;
    readonly version: number;
    constructor(data?: KalturaResponseProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
