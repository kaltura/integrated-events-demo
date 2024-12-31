import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionItemFilter, KalturaPermissionItemFilterArgs } from './KalturaPermissionItemFilter';
export interface KalturaApiParameterPermissionItemBaseFilterArgs extends KalturaPermissionItemFilterArgs {
}
export declare class KalturaApiParameterPermissionItemBaseFilter extends KalturaPermissionItemFilter {
    constructor(data?: KalturaApiParameterPermissionItemBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
