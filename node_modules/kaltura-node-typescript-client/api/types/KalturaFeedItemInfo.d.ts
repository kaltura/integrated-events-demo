import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaFeedItemInfoArgs extends KalturaObjectBaseArgs {
    itemXPath?: string;
    itemPublishDateXPath?: string;
    itemUniqueIdentifierXPath?: string;
    itemContentFileSizeXPath?: string;
    itemContentUrlXPath?: string;
    itemContentBitrateXPath?: string;
    itemHashXPath?: string;
    itemContentXpath?: string;
    contentBitrateAttributeName?: string;
}
export declare class KalturaFeedItemInfo extends KalturaObjectBase {
    itemXPath: string;
    itemPublishDateXPath: string;
    itemUniqueIdentifierXPath: string;
    itemContentFileSizeXPath: string;
    itemContentUrlXPath: string;
    itemContentBitrateXPath: string;
    itemHashXPath: string;
    itemContentXpath: string;
    contentBitrateAttributeName: string;
    constructor(data?: KalturaFeedItemInfoArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
