import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntryStatus } from './KalturaUserEntryStatus';
import { KalturaUserEntryType } from './KalturaUserEntryType';
import { KalturaUserEntryExtendedStatus } from './KalturaUserEntryExtendedStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaUserEntryArgs extends KalturaObjectBaseArgs {
    entryId?: string;
    userId?: string;
    extendedStatus?: KalturaUserEntryExtendedStatus;
}
export declare class KalturaUserEntry extends KalturaObjectBase {
    readonly id: number;
    entryId: string;
    userId: string;
    readonly partnerId: number;
    readonly status: KalturaUserEntryStatus;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly type: KalturaUserEntryType;
    extendedStatus: KalturaUserEntryExtendedStatus;
    constructor(data?: KalturaUserEntryArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
