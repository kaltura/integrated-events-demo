import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDVRStatus } from './KalturaDVRStatus';
import { KalturaAkamaiUniversalStreamType } from './KalturaAkamaiUniversalStreamType';
import { KalturaProvisionJobData, KalturaProvisionJobDataArgs } from './KalturaProvisionJobData';
export interface KalturaAkamaiUniversalProvisionJobDataArgs extends KalturaProvisionJobDataArgs {
    streamId?: number;
    systemUserName?: string;
    systemPassword?: string;
    domainName?: string;
    dvrEnabled?: KalturaDVRStatus;
    dvrWindow?: number;
    primaryContact?: string;
    secondaryContact?: string;
    streamType?: KalturaAkamaiUniversalStreamType;
    notificationEmail?: string;
}
export declare class KalturaAkamaiUniversalProvisionJobData extends KalturaProvisionJobData {
    streamId: number;
    systemUserName: string;
    systemPassword: string;
    domainName: string;
    dvrEnabled: KalturaDVRStatus;
    dvrWindow: number;
    primaryContact: string;
    secondaryContact: string;
    streamType: KalturaAkamaiUniversalStreamType;
    notificationEmail: string;
    constructor(data?: KalturaAkamaiUniversalProvisionJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
