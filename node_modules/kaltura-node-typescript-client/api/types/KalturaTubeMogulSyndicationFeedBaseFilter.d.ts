import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeedFilter, KalturaBaseSyndicationFeedFilterArgs } from './KalturaBaseSyndicationFeedFilter';
export interface KalturaTubeMogulSyndicationFeedBaseFilterArgs extends KalturaBaseSyndicationFeedFilterArgs {
}
export declare class KalturaTubeMogulSyndicationFeedBaseFilter extends KalturaBaseSyndicationFeedFilter {
    constructor(data?: KalturaTubeMogulSyndicationFeedBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
