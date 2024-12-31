import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuditTrail } from './KalturaAuditTrail';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaAuditTrailListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaAuditTrailListResponse extends KalturaListResponse {
    readonly objects: KalturaAuditTrail[];
    constructor(data?: KalturaAuditTrailListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
