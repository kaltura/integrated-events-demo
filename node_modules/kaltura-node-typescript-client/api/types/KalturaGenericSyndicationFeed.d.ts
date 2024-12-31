import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaBaseSyndicationFeed, KalturaBaseSyndicationFeedArgs } from './KalturaBaseSyndicationFeed';
export interface KalturaGenericSyndicationFeedArgs extends KalturaBaseSyndicationFeedArgs {
    feedDescription?: string;
    feedLandingPage?: string;
    entryFilter?: KalturaBaseEntryFilter;
    pageSize?: number;
}
export declare class KalturaGenericSyndicationFeed extends KalturaBaseSyndicationFeed {
    feedDescription: string;
    feedLandingPage: string;
    entryFilter: KalturaBaseEntryFilter;
    pageSize: number;
    constructor(data?: KalturaGenericSyndicationFeedArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
