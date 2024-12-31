import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaParseCaptionAssetJobDataArgs extends KalturaJobDataArgs {
    captionAssetId?: string;
}
export declare class KalturaParseCaptionAssetJobData extends KalturaJobData {
    captionAssetId: string;
    constructor(data?: KalturaParseCaptionAssetJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
