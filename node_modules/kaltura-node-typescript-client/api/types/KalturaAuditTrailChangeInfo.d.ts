import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuditTrailChangeItem } from './KalturaAuditTrailChangeItem';
import { KalturaAuditTrailInfo, KalturaAuditTrailInfoArgs } from './KalturaAuditTrailInfo';
export interface KalturaAuditTrailChangeInfoArgs extends KalturaAuditTrailInfoArgs {
    changedItems?: KalturaAuditTrailChangeItem[];
}
export declare class KalturaAuditTrailChangeInfo extends KalturaAuditTrailInfo {
    changedItems: KalturaAuditTrailChangeItem[];
    constructor(data?: KalturaAuditTrailChangeInfoArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
