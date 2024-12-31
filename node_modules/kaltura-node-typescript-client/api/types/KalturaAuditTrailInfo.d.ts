import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaAuditTrailInfoArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaAuditTrailInfo extends KalturaObjectBase {
    constructor(data?: KalturaAuditTrailInfoArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
