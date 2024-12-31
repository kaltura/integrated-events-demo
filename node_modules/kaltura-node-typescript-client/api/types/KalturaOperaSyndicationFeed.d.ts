import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConstantXsltSyndicationFeed, KalturaConstantXsltSyndicationFeedArgs } from './KalturaConstantXsltSyndicationFeed';
export interface KalturaOperaSyndicationFeedArgs extends KalturaConstantXsltSyndicationFeedArgs {
}
export declare class KalturaOperaSyndicationFeed extends KalturaConstantXsltSyndicationFeed {
    constructor(data?: KalturaOperaSyndicationFeedArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
