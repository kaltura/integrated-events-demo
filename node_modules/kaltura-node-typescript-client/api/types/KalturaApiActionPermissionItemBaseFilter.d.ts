import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionItemFilter, KalturaPermissionItemFilterArgs } from './KalturaPermissionItemFilter';
export interface KalturaApiActionPermissionItemBaseFilterArgs extends KalturaPermissionItemFilterArgs {
}
export declare class KalturaApiActionPermissionItemBaseFilter extends KalturaPermissionItemFilter {
    constructor(data?: KalturaApiActionPermissionItemBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
