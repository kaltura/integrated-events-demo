import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaShortLinkStatus } from './KalturaShortLinkStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaShortLinkArgs extends KalturaObjectBaseArgs {
    expiresAt?: number;
    userId?: string;
    name?: string;
    systemName?: string;
    fullUrl?: string;
    status?: KalturaShortLinkStatus;
}
export declare class KalturaShortLink extends KalturaObjectBase {
    readonly id: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    expiresAt: number;
    readonly partnerId: number;
    userId: string;
    name: string;
    systemName: string;
    fullUrl: string;
    status: KalturaShortLinkStatus;
    constructor(data?: KalturaShortLinkArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
