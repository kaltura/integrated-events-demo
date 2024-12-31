import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaApiActionPermissionItemBaseFilter, KalturaApiActionPermissionItemBaseFilterArgs } from './KalturaApiActionPermissionItemBaseFilter';
export interface KalturaApiActionPermissionItemFilterArgs extends KalturaApiActionPermissionItemBaseFilterArgs {
}
export declare class KalturaApiActionPermissionItemFilter extends KalturaApiActionPermissionItemBaseFilter {
    constructor(data?: KalturaApiActionPermissionItemFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
