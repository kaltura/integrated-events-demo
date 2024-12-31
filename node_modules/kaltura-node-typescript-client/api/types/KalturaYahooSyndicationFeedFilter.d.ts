import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaYahooSyndicationFeedBaseFilter, KalturaYahooSyndicationFeedBaseFilterArgs } from './KalturaYahooSyndicationFeedBaseFilter';
export interface KalturaYahooSyndicationFeedFilterArgs extends KalturaYahooSyndicationFeedBaseFilterArgs {
}
export declare class KalturaYahooSyndicationFeedFilter extends KalturaYahooSyndicationFeedBaseFilter {
    constructor(data?: KalturaYahooSyndicationFeedFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
