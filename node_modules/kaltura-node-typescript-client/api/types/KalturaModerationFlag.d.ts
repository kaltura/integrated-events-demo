import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaModerationObjectType } from './KalturaModerationObjectType';
import { KalturaModerationFlagStatus } from './KalturaModerationFlagStatus';
import { KalturaModerationFlagType } from './KalturaModerationFlagType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaModerationFlagArgs extends KalturaObjectBaseArgs {
    flaggedEntryId?: string;
    flaggedUserId?: string;
    comments?: string;
    flagType?: KalturaModerationFlagType;
}
export declare class KalturaModerationFlag extends KalturaObjectBase {
    readonly id: number;
    readonly partnerId: number;
    readonly userId: string;
    readonly moderationObjectType: KalturaModerationObjectType;
    flaggedEntryId: string;
    flaggedUserId: string;
    readonly status: KalturaModerationFlagStatus;
    comments: string;
    flagType: KalturaModerationFlagType;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    constructor(data?: KalturaModerationFlagArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
