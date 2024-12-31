import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedBaseFilterArgs } from './KalturaBaseSyndicationFeedBaseFilter';
export interface KalturaBaseSyndicationFeedFilterArgs extends KalturaBaseSyndicationFeedBaseFilterArgs {
}
export declare class KalturaBaseSyndicationFeedFilter extends KalturaBaseSyndicationFeedBaseFilter {
    constructor(data?: KalturaBaseSyndicationFeedFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
