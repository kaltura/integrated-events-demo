import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaAuditTrailChangeItemArgs extends KalturaObjectBaseArgs {
    descriptor?: string;
    oldValue?: string;
    newValue?: string;
}
export declare class KalturaAuditTrailChangeItem extends KalturaObjectBase {
    descriptor: string;
    oldValue: string;
    newValue: string;
    constructor(data?: KalturaAuditTrailChangeItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
