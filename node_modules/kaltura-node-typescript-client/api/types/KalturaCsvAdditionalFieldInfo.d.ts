import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaCsvAdditionalFieldInfoArgs extends KalturaObjectBaseArgs {
    fieldName?: string;
    xpath?: string;
}
export declare class KalturaCsvAdditionalFieldInfo extends KalturaObjectBase {
    fieldName: string;
    xpath: string;
    constructor(data?: KalturaCsvAdditionalFieldInfoArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
