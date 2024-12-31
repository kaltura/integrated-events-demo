import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaImportMetadataJobDataArgs extends KalturaJobDataArgs {
    srcFileUrl?: string;
    destFileLocalPath?: string;
    metadataId?: number;
}
export declare class KalturaImportMetadataJobData extends KalturaJobData {
    srcFileUrl: string;
    destFileLocalPath: string;
    metadataId: number;
    constructor(data?: KalturaImportMetadataJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
