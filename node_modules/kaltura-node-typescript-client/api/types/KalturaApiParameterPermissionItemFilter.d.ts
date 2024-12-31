import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaApiParameterPermissionItemBaseFilter, KalturaApiParameterPermissionItemBaseFilterArgs } from './KalturaApiParameterPermissionItemBaseFilter';
export interface KalturaApiParameterPermissionItemFilterArgs extends KalturaApiParameterPermissionItemBaseFilterArgs {
}
export declare class KalturaApiParameterPermissionItemFilter extends KalturaApiParameterPermissionItemBaseFilter {
    constructor(data?: KalturaApiParameterPermissionItemFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
