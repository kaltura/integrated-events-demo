import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaResponseProfileCacheRecalculateOptionsArgs extends KalturaObjectBaseArgs {
    limit?: number;
    cachedObjectType?: string;
    objectId?: string;
    startObjectKey?: string;
    endObjectKey?: string;
    jobCreatedAt?: Date;
    isFirstLoop?: boolean;
}
export declare class KalturaResponseProfileCacheRecalculateOptions extends KalturaObjectBase {
    limit: number;
    cachedObjectType: string;
    objectId: string;
    startObjectKey: string;
    endObjectKey: string;
    jobCreatedAt: Date;
    isFirstLoop: boolean;
    constructor(data?: KalturaResponseProfileCacheRecalculateOptionsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
