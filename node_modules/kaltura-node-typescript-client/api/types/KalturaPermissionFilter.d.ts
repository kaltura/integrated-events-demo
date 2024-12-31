import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionBaseFilter, KalturaPermissionBaseFilterArgs } from './KalturaPermissionBaseFilter';
export interface KalturaPermissionFilterArgs extends KalturaPermissionBaseFilterArgs {
}
export declare class KalturaPermissionFilter extends KalturaPermissionBaseFilter {
    constructor(data?: KalturaPermissionFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
