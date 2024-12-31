import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaParseMultiLanguageCaptionAssetJobDataArgs extends KalturaJobDataArgs {
    multiLanaguageCaptionAssetId?: string;
    entryId?: string;
    fileLocation?: string;
    fileEncryptionKey?: string;
}
export declare class KalturaParseMultiLanguageCaptionAssetJobData extends KalturaJobData {
    multiLanaguageCaptionAssetId: string;
    entryId: string;
    fileLocation: string;
    fileEncryptionKey: string;
    constructor(data?: KalturaParseMultiLanguageCaptionAssetJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
