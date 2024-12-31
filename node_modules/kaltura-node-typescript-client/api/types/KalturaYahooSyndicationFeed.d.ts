import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaYahooSyndicationFeedCategories } from './KalturaYahooSyndicationFeedCategories';
import { KalturaYahooSyndicationFeedAdultValues } from './KalturaYahooSyndicationFeedAdultValues';
import { KalturaBaseSyndicationFeed, KalturaBaseSyndicationFeedArgs } from './KalturaBaseSyndicationFeed';
export interface KalturaYahooSyndicationFeedArgs extends KalturaBaseSyndicationFeedArgs {
    adultContent?: KalturaYahooSyndicationFeedAdultValues;
    feedDescription?: string;
    feedLandingPage?: string;
}
export declare class KalturaYahooSyndicationFeed extends KalturaBaseSyndicationFeed {
    readonly category: KalturaYahooSyndicationFeedCategories;
    adultContent: KalturaYahooSyndicationFeedAdultValues;
    feedDescription: string;
    feedLandingPage: string;
    constructor(data?: KalturaYahooSyndicationFeedArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
