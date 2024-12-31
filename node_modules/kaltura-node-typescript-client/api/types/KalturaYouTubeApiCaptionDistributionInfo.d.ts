import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaYouTubeApiDistributionCaptionAction } from './KalturaYouTubeApiDistributionCaptionAction';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaYouTubeApiCaptionDistributionInfoArgs extends KalturaObjectBaseArgs {
    language?: string;
    label?: string;
    filePath?: string;
    remoteId?: string;
    action?: KalturaYouTubeApiDistributionCaptionAction;
    version?: string;
    assetId?: string;
}
export declare class KalturaYouTubeApiCaptionDistributionInfo extends KalturaObjectBase {
    language: string;
    label: string;
    filePath: string;
    remoteId: string;
    action: KalturaYouTubeApiDistributionCaptionAction;
    version: string;
    assetId: string;
    constructor(data?: KalturaYouTubeApiCaptionDistributionInfoArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
