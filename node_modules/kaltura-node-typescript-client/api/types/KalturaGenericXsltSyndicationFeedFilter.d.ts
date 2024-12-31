import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericXsltSyndicationFeedBaseFilter, KalturaGenericXsltSyndicationFeedBaseFilterArgs } from './KalturaGenericXsltSyndicationFeedBaseFilter';
export interface KalturaGenericXsltSyndicationFeedFilterArgs extends KalturaGenericXsltSyndicationFeedBaseFilterArgs {
}
export declare class KalturaGenericXsltSyndicationFeedFilter extends KalturaGenericXsltSyndicationFeedBaseFilter {
    constructor(data?: KalturaGenericXsltSyndicationFeedFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
