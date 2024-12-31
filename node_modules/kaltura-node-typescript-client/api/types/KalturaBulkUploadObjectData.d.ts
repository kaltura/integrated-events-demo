import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaBulkUploadObjectDataArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaBulkUploadObjectData extends KalturaObjectBase {
    constructor(data?: KalturaBulkUploadObjectDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
