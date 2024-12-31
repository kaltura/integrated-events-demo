import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaApiParameterPermissionItemAction } from './KalturaApiParameterPermissionItemAction';
import { KalturaPermissionItem, KalturaPermissionItemArgs } from './KalturaPermissionItem';
export interface KalturaApiParameterPermissionItemArgs extends KalturaPermissionItemArgs {
    object?: string;
    parameter?: string;
    action?: KalturaApiParameterPermissionItemAction;
}
export declare class KalturaApiParameterPermissionItem extends KalturaPermissionItem {
    object: string;
    parameter: string;
    action: KalturaApiParameterPermissionItemAction;
    constructor(data?: KalturaApiParameterPermissionItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
