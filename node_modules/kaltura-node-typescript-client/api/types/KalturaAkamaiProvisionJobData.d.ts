import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaProvisionJobData, KalturaProvisionJobDataArgs } from './KalturaProvisionJobData';
export interface KalturaAkamaiProvisionJobDataArgs extends KalturaProvisionJobDataArgs {
    wsdlUsername?: string;
    wsdlPassword?: string;
    cpcode?: string;
    emailId?: string;
    primaryContact?: string;
    secondaryContact?: string;
}
export declare class KalturaAkamaiProvisionJobData extends KalturaProvisionJobData {
    wsdlUsername: string;
    wsdlPassword: string;
    cpcode: string;
    emailId: string;
    primaryContact: string;
    secondaryContact: string;
    constructor(data?: KalturaAkamaiProvisionJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
