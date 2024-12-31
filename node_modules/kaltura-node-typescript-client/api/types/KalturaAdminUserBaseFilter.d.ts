import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserFilter, KalturaUserFilterArgs } from './KalturaUserFilter';
export interface KalturaAdminUserBaseFilterArgs extends KalturaUserFilterArgs {
}
export declare class KalturaAdminUserBaseFilter extends KalturaUserFilter {
    constructor(data?: KalturaAdminUserBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
