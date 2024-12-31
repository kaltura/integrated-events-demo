import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConstantXsltSyndicationFeed, KalturaConstantXsltSyndicationFeedArgs } from './KalturaConstantXsltSyndicationFeed';
export interface KalturaRokuSyndicationFeedArgs extends KalturaConstantXsltSyndicationFeedArgs {
}
export declare class KalturaRokuSyndicationFeed extends KalturaConstantXsltSyndicationFeed {
    constructor(data?: KalturaRokuSyndicationFeedArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
