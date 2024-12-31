import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericSyndicationFeedBaseFilter, KalturaGenericSyndicationFeedBaseFilterArgs } from './KalturaGenericSyndicationFeedBaseFilter';
export interface KalturaGenericSyndicationFeedFilterArgs extends KalturaGenericSyndicationFeedBaseFilterArgs {
}
export declare class KalturaGenericSyndicationFeedFilter extends KalturaGenericSyndicationFeedBaseFilter {
    constructor(data?: KalturaGenericSyndicationFeedFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
