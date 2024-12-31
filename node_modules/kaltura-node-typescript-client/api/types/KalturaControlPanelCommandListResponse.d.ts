import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaControlPanelCommand } from './KalturaControlPanelCommand';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaControlPanelCommandListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaControlPanelCommandListResponse extends KalturaListResponse {
    readonly objects: KalturaControlPanelCommand[];
    constructor(data?: KalturaControlPanelCommandListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
