import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuditTrailChangeXmlNodeType } from './KalturaAuditTrailChangeXmlNodeType';
import { KalturaAuditTrailChangeItem, KalturaAuditTrailChangeItemArgs } from './KalturaAuditTrailChangeItem';
export interface KalturaAuditTrailChangeXmlNodeArgs extends KalturaAuditTrailChangeItemArgs {
    type?: KalturaAuditTrailChangeXmlNodeType;
}
export declare class KalturaAuditTrailChangeXmlNode extends KalturaAuditTrailChangeItem {
    type: KalturaAuditTrailChangeXmlNodeType;
    constructor(data?: KalturaAuditTrailChangeXmlNodeArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
