import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeedFilter, KalturaBaseSyndicationFeedFilterArgs } from './KalturaBaseSyndicationFeedFilter';
export interface KalturaITunesSyndicationFeedBaseFilterArgs extends KalturaBaseSyndicationFeedFilterArgs {
}
export declare class KalturaITunesSyndicationFeedBaseFilter extends KalturaBaseSyndicationFeedFilter {
    constructor(data?: KalturaITunesSyndicationFeedBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
