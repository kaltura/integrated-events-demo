import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaClientNotificationArgs extends KalturaObjectBaseArgs {
    url?: string;
    data?: string;
}
export declare class KalturaClientNotification extends KalturaObjectBase {
    url: string;
    data: string;
    constructor(data?: KalturaClientNotificationArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
