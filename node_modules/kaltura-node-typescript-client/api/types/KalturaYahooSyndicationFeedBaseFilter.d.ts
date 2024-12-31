import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeedFilter, KalturaBaseSyndicationFeedFilterArgs } from './KalturaBaseSyndicationFeedFilter';
export interface KalturaYahooSyndicationFeedBaseFilterArgs extends KalturaBaseSyndicationFeedFilterArgs {
}
export declare class KalturaYahooSyndicationFeedBaseFilter extends KalturaBaseSyndicationFeedFilter {
    constructor(data?: KalturaYahooSyndicationFeedBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
