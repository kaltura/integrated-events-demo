import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaLikeArgs extends KalturaObjectBaseArgs {
    entryId?: string;
    userId?: string;
    createdAt?: Date;
}
export declare class KalturaLike extends KalturaObjectBase {
    entryId: string;
    userId: string;
    createdAt: Date;
    constructor(data?: KalturaLikeArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
