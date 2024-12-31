import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaITunesSyndicationFeedBaseFilter, KalturaITunesSyndicationFeedBaseFilterArgs } from './KalturaITunesSyndicationFeedBaseFilter';
export interface KalturaITunesSyndicationFeedFilterArgs extends KalturaITunesSyndicationFeedBaseFilterArgs {
}
export declare class KalturaITunesSyndicationFeedFilter extends KalturaITunesSyndicationFeedBaseFilter {
    constructor(data?: KalturaITunesSyndicationFeedFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
