import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericXsltSyndicationFeed, KalturaGenericXsltSyndicationFeedArgs } from './KalturaGenericXsltSyndicationFeed';
export interface KalturaConstantXsltSyndicationFeedArgs extends KalturaGenericXsltSyndicationFeedArgs {
}
export declare class KalturaConstantXsltSyndicationFeed extends KalturaGenericXsltSyndicationFeed {
    constructor(data?: KalturaConstantXsltSyndicationFeedArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
