import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaEventNotificationTemplateListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaEventNotificationTemplateListResponse extends KalturaListResponse {
    readonly objects: KalturaEventNotificationTemplate[];
    constructor(data?: KalturaEventNotificationTemplateListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
