import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericSyndicationFeedFilter, KalturaGenericSyndicationFeedFilterArgs } from './KalturaGenericSyndicationFeedFilter';
export interface KalturaGenericXsltSyndicationFeedBaseFilterArgs extends KalturaGenericSyndicationFeedFilterArgs {
}
export declare class KalturaGenericXsltSyndicationFeedBaseFilter extends KalturaGenericSyndicationFeedFilter {
    constructor(data?: KalturaGenericXsltSyndicationFeedBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
