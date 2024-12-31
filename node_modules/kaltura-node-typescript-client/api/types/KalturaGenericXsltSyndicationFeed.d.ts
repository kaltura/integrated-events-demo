import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExtendingItemMrssParameter } from './KalturaExtendingItemMrssParameter';
import { KalturaGenericSyndicationFeed, KalturaGenericSyndicationFeedArgs } from './KalturaGenericSyndicationFeed';
export interface KalturaGenericXsltSyndicationFeedArgs extends KalturaGenericSyndicationFeedArgs {
    xslt?: string;
    itemXpathsToExtend?: KalturaExtendingItemMrssParameter[];
}
export declare class KalturaGenericXsltSyndicationFeed extends KalturaGenericSyndicationFeed {
    xslt: string;
    itemXpathsToExtend: KalturaExtendingItemMrssParameter[];
    constructor(data?: KalturaGenericXsltSyndicationFeedArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
