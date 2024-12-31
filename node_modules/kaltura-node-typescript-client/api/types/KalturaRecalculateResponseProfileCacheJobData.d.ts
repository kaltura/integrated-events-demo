import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaRecalculateCacheJobData, KalturaRecalculateCacheJobDataArgs } from './KalturaRecalculateCacheJobData';
export interface KalturaRecalculateResponseProfileCacheJobDataArgs extends KalturaRecalculateCacheJobDataArgs {
    protocol?: string;
    ksType?: KalturaSessionType;
    userRoles?: KalturaIntegerValue[];
    cachedObjectType?: string;
    objectId?: string;
    startObjectKey?: string;
    endObjectKey?: string;
}
export declare class KalturaRecalculateResponseProfileCacheJobData extends KalturaRecalculateCacheJobData {
    protocol: string;
    ksType: KalturaSessionType;
    userRoles: KalturaIntegerValue[];
    cachedObjectType: string;
    objectId: string;
    startObjectKey: string;
    endObjectKey: string;
    constructor(data?: KalturaRecalculateResponseProfileCacheJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
