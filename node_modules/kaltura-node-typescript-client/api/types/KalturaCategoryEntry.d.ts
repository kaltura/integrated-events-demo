import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryEntryStatus } from './KalturaCategoryEntryStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaCategoryEntryArgs extends KalturaObjectBaseArgs {
    categoryId?: number;
    entryId?: string;
}
export declare class KalturaCategoryEntry extends KalturaObjectBase {
    categoryId: number;
    entryId: string;
    readonly createdAt: Date;
    readonly categoryFullIds: string;
    readonly status: KalturaCategoryEntryStatus;
    readonly creatorUserId: string;
    constructor(data?: KalturaCategoryEntryArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
