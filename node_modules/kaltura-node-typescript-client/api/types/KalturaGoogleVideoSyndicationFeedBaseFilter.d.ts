import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeedFilter, KalturaBaseSyndicationFeedFilterArgs } from './KalturaBaseSyndicationFeedFilter';
export interface KalturaGoogleVideoSyndicationFeedBaseFilterArgs extends KalturaBaseSyndicationFeedFilterArgs {
}
export declare class KalturaGoogleVideoSyndicationFeedBaseFilter extends KalturaBaseSyndicationFeedFilter {
    constructor(data?: KalturaGoogleVideoSyndicationFeedBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
