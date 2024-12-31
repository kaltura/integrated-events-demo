import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeedFilter, KalturaBaseSyndicationFeedFilterArgs } from './KalturaBaseSyndicationFeedFilter';
export interface KalturaGenericSyndicationFeedBaseFilterArgs extends KalturaBaseSyndicationFeedFilterArgs {
}
export declare class KalturaGenericSyndicationFeedBaseFilter extends KalturaBaseSyndicationFeedFilter {
    constructor(data?: KalturaGenericSyndicationFeedBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
