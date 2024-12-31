import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGoogleVideoSyndicationFeedBaseFilter, KalturaGoogleVideoSyndicationFeedBaseFilterArgs } from './KalturaGoogleVideoSyndicationFeedBaseFilter';
export interface KalturaGoogleVideoSyndicationFeedFilterArgs extends KalturaGoogleVideoSyndicationFeedBaseFilterArgs {
}
export declare class KalturaGoogleVideoSyndicationFeedFilter extends KalturaGoogleVideoSyndicationFeedBaseFilter {
    constructor(data?: KalturaGoogleVideoSyndicationFeedFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
