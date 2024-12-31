import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStartWidgetSessionResponse, KalturaStartWidgetSessionResponseArgs } from './KalturaStartWidgetSessionResponse';
export interface KalturaSessionResponseArgs extends KalturaStartWidgetSessionResponseArgs {
}
export declare class KalturaSessionResponse extends KalturaStartWidgetSessionResponse {
    constructor(data?: KalturaSessionResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
