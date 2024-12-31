import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionItem, KalturaPermissionItemArgs } from './KalturaPermissionItem';
export interface KalturaApiActionPermissionItemArgs extends KalturaPermissionItemArgs {
    service?: string;
    action?: string;
}
export declare class KalturaApiActionPermissionItem extends KalturaPermissionItem {
    service: string;
    action: string;
    constructor(data?: KalturaApiActionPermissionItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
