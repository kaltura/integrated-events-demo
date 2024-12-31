import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileContainer } from './KalturaFileContainer';
import { KalturaVirusScanJobResult } from './KalturaVirusScanJobResult';
import { KalturaVirusFoundAction } from './KalturaVirusFoundAction';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaVirusScanJobDataArgs extends KalturaJobDataArgs {
    fileContainer?: KalturaFileContainer;
    flavorAssetId?: string;
    scanResult?: KalturaVirusScanJobResult;
    virusFoundAction?: KalturaVirusFoundAction;
}
export declare class KalturaVirusScanJobData extends KalturaJobData {
    fileContainer: KalturaFileContainer;
    flavorAssetId: string;
    scanResult: KalturaVirusScanJobResult;
    virusFoundAction: KalturaVirusFoundAction;
    constructor(data?: KalturaVirusScanJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
