import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaBulkUploadPluginDataArgs extends KalturaObjectBaseArgs {
    field?: string;
    value?: string;
}
export declare class KalturaBulkUploadPluginData extends KalturaObjectBase {
    field: string;
    value: string;
    constructor(data?: KalturaBulkUploadPluginDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
