import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuditTrailInfo, KalturaAuditTrailInfoArgs } from './KalturaAuditTrailInfo';
export interface KalturaAuditTrailTextInfoArgs extends KalturaAuditTrailInfoArgs {
    info?: string;
}
export declare class KalturaAuditTrailTextInfo extends KalturaAuditTrailInfo {
    info: string;
    constructor(data?: KalturaAuditTrailTextInfoArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
