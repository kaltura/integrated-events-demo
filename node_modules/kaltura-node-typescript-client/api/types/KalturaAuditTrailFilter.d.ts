import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuditTrailBaseFilter, KalturaAuditTrailBaseFilterArgs } from './KalturaAuditTrailBaseFilter';
export interface KalturaAuditTrailFilterArgs extends KalturaAuditTrailBaseFilterArgs {
}
export declare class KalturaAuditTrailFilter extends KalturaAuditTrailBaseFilter {
    constructor(data?: KalturaAuditTrailFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
