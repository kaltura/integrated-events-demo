import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuditTrailFileSyncType } from './KalturaAuditTrailFileSyncType';
import { KalturaAuditTrailInfo, KalturaAuditTrailInfoArgs } from './KalturaAuditTrailInfo';
export interface KalturaAuditTrailFileSyncCreateInfoArgs extends KalturaAuditTrailInfoArgs {
    version?: string;
    objectSubType?: number;
    dc?: number;
    original?: boolean;
    fileType?: KalturaAuditTrailFileSyncType;
}
export declare class KalturaAuditTrailFileSyncCreateInfo extends KalturaAuditTrailInfo {
    version: string;
    objectSubType: number;
    dc: number;
    original: boolean;
    fileType: KalturaAuditTrailFileSyncType;
    constructor(data?: KalturaAuditTrailFileSyncCreateInfoArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
