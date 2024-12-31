import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRoleBaseFilter, KalturaUserRoleBaseFilterArgs } from './KalturaUserRoleBaseFilter';
export interface KalturaUserRoleFilterArgs extends KalturaUserRoleBaseFilterArgs {
}
export declare class KalturaUserRoleFilter extends KalturaUserRoleBaseFilter {
    constructor(data?: KalturaUserRoleFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
