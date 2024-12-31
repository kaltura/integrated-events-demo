import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';
export interface KalturaMailNotificationObjectTaskArgs extends KalturaObjectTaskArgs {
    mailTo?: string;
    sender?: string;
    subject?: string;
    message?: string;
    footer?: string;
    link?: string;
    sendToUsers?: boolean;
}
export declare class KalturaMailNotificationObjectTask extends KalturaObjectTask {
    mailTo: string;
    sender: string;
    subject: string;
    message: string;
    footer: string;
    link: string;
    sendToUsers: boolean;
    constructor(data?: KalturaMailNotificationObjectTaskArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
