import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaITunesSyndicationFeedCategories } from './KalturaITunesSyndicationFeedCategories';
import { KalturaITunesSyndicationFeedAdultValues } from './KalturaITunesSyndicationFeedAdultValues';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaBaseSyndicationFeed, KalturaBaseSyndicationFeedArgs } from './KalturaBaseSyndicationFeed';
export interface KalturaITunesSyndicationFeedArgs extends KalturaBaseSyndicationFeedArgs {
    feedDescription?: string;
    language?: string;
    feedLandingPage?: string;
    ownerName?: string;
    ownerEmail?: string;
    feedImageUrl?: string;
    adultContent?: KalturaITunesSyndicationFeedAdultValues;
    feedAuthor?: string;
    enforceFeedAuthor?: boolean;
    enforceOrder?: KalturaNullableBoolean;
}
export declare class KalturaITunesSyndicationFeed extends KalturaBaseSyndicationFeed {
    feedDescription: string;
    language: string;
    feedLandingPage: string;
    ownerName: string;
    ownerEmail: string;
    feedImageUrl: string;
    readonly category: KalturaITunesSyndicationFeedCategories;
    adultContent: KalturaITunesSyndicationFeedAdultValues;
    feedAuthor: string;
    enforceFeedAuthor: boolean;
    enforceOrder: KalturaNullableBoolean;
    constructor(data?: KalturaITunesSyndicationFeedArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
