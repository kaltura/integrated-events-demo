import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDailymotionDistributionCaptionAction } from './KalturaDailymotionDistributionCaptionAction';
import { KalturaDailymotionDistributionCaptionFormat } from './KalturaDailymotionDistributionCaptionFormat';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaDailymotionDistributionCaptionInfoArgs extends KalturaObjectBaseArgs {
    language?: string;
    filePath?: string;
    remoteId?: string;
    action?: KalturaDailymotionDistributionCaptionAction;
    version?: string;
    assetId?: string;
    format?: KalturaDailymotionDistributionCaptionFormat;
}
export declare class KalturaDailymotionDistributionCaptionInfo extends KalturaObjectBase {
    language: string;
    filePath: string;
    remoteId: string;
    action: KalturaDailymotionDistributionCaptionAction;
    version: string;
    assetId: string;
    format: KalturaDailymotionDistributionCaptionFormat;
    constructor(data?: KalturaDailymotionDistributionCaptionInfoArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
