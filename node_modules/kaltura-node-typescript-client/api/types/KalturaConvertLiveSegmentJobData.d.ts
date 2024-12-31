import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaConvertLiveSegmentJobDataArgs extends KalturaJobDataArgs {
    entryId?: string;
    assetId?: string;
    mediaServerIndex?: KalturaEntryServerNodeType;
    fileIndex?: number;
    srcFilePath?: string;
    destFilePath?: string;
    endTime?: number;
    destDataFilePath?: string;
}
export declare class KalturaConvertLiveSegmentJobData extends KalturaJobData {
    entryId: string;
    assetId: string;
    mediaServerIndex: KalturaEntryServerNodeType;
    fileIndex: number;
    srcFilePath: string;
    destFilePath: string;
    endTime: number;
    destDataFilePath: string;
    constructor(data?: KalturaConvertLiveSegmentJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
