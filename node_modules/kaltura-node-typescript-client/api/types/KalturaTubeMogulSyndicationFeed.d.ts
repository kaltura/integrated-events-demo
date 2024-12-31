import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTubeMogulSyndicationFeedCategories } from './KalturaTubeMogulSyndicationFeedCategories';
import { KalturaBaseSyndicationFeed, KalturaBaseSyndicationFeedArgs } from './KalturaBaseSyndicationFeed';
export interface KalturaTubeMogulSyndicationFeedArgs extends KalturaBaseSyndicationFeedArgs {
}
export declare class KalturaTubeMogulSyndicationFeed extends KalturaBaseSyndicationFeed {
    readonly category: KalturaTubeMogulSyndicationFeedCategories;
    constructor(data?: KalturaTubeMogulSyndicationFeedArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
