import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTubeMogulSyndicationFeedBaseFilter, KalturaTubeMogulSyndicationFeedBaseFilterArgs } from './KalturaTubeMogulSyndicationFeedBaseFilter';
export interface KalturaTubeMogulSyndicationFeedFilterArgs extends KalturaTubeMogulSyndicationFeedBaseFilterArgs {
}
export declare class KalturaTubeMogulSyndicationFeedFilter extends KalturaTubeMogulSyndicationFeedBaseFilter {
    constructor(data?: KalturaTubeMogulSyndicationFeedFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
