import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaSyndicationFeedEntryCountArgs extends KalturaObjectBaseArgs {
    totalEntryCount?: number;
    actualEntryCount?: number;
    requireTranscodingCount?: number;
}
export declare class KalturaSyndicationFeedEntryCount extends KalturaObjectBase {
    totalEntryCount: number;
    actualEntryCount: number;
    requireTranscodingCount: number;
    constructor(data?: KalturaSyndicationFeedEntryCountArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
