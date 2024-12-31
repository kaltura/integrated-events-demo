import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionItemBaseFilter, KalturaPermissionItemBaseFilterArgs } from './KalturaPermissionItemBaseFilter';
export interface KalturaPermissionItemFilterArgs extends KalturaPermissionItemBaseFilterArgs {
}
export declare class KalturaPermissionItemFilter extends KalturaPermissionItemBaseFilter {
    constructor(data?: KalturaPermissionItemFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
