import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaBulkServiceDataArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaBulkServiceData extends KalturaObjectBase {
    constructor(data?: KalturaBulkServiceDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
