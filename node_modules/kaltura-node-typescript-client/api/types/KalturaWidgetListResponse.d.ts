import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidget } from './KalturaWidget';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaWidgetListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaWidgetListResponse extends KalturaListResponse {
    readonly objects: KalturaWidget[];
    constructor(data?: KalturaWidgetListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
