import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaProvisionJobDataArgs extends KalturaJobDataArgs {
    streamID?: string;
    backupStreamID?: string;
    rtmp?: string;
    encoderIP?: string;
    backupEncoderIP?: string;
    encoderPassword?: string;
    encoderUsername?: string;
    endDate?: number;
    returnVal?: string;
    mediaType?: number;
    primaryBroadcastingUrl?: string;
    secondaryBroadcastingUrl?: string;
    streamName?: string;
}
export declare class KalturaProvisionJobData extends KalturaJobData {
    streamID: string;
    backupStreamID: string;
    rtmp: string;
    encoderIP: string;
    backupEncoderIP: string;
    encoderPassword: string;
    encoderUsername: string;
    endDate: number;
    returnVal: string;
    mediaType: number;
    primaryBroadcastingUrl: string;
    secondaryBroadcastingUrl: string;
    streamName: string;
    constructor(data?: KalturaProvisionJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
