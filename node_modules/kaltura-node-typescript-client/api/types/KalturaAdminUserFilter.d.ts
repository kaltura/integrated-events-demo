import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAdminUserBaseFilter, KalturaAdminUserBaseFilterArgs } from './KalturaAdminUserBaseFilter';
export interface KalturaAdminUserFilterArgs extends KalturaAdminUserBaseFilterArgs {
}
export declare class KalturaAdminUserFilter extends KalturaAdminUserBaseFilter {
    constructor(data?: KalturaAdminUserFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
