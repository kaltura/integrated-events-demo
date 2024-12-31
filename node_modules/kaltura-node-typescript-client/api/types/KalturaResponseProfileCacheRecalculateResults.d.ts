import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaResponseProfileCacheRecalculateResultsArgs extends KalturaObjectBaseArgs {
    lastObjectKey?: string;
    recalculated?: number;
}
export declare class KalturaResponseProfileCacheRecalculateResults extends KalturaObjectBase {
    lastObjectKey: string;
    recalculated: number;
    constructor(data?: KalturaResponseProfileCacheRecalculateResultsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
