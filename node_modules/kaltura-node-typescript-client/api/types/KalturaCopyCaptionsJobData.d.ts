import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaClipDescription } from './KalturaClipDescription';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaCopyCaptionsJobDataArgs extends KalturaJobDataArgs {
    entryId?: string;
    clipsDescriptionArray?: KalturaClipDescription[];
    fullCopy?: boolean;
}
export declare class KalturaCopyCaptionsJobData extends KalturaJobData {
    entryId: string;
    clipsDescriptionArray: KalturaClipDescription[];
    fullCopy: boolean;
    constructor(data?: KalturaCopyCaptionsJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
