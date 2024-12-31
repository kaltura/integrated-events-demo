import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGoogleSyndicationFeedAdultValues } from './KalturaGoogleSyndicationFeedAdultValues';
import { KalturaBaseSyndicationFeed, KalturaBaseSyndicationFeedArgs } from './KalturaBaseSyndicationFeed';
export interface KalturaGoogleVideoSyndicationFeedArgs extends KalturaBaseSyndicationFeedArgs {
    adultContent?: KalturaGoogleSyndicationFeedAdultValues;
}
export declare class KalturaGoogleVideoSyndicationFeed extends KalturaBaseSyndicationFeed {
    adultContent: KalturaGoogleSyndicationFeedAdultValues;
    constructor(data?: KalturaGoogleVideoSyndicationFeedArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
