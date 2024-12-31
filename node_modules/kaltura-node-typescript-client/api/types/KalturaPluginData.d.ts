import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPluginDataArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaPluginData extends KalturaObjectBase {
    constructor(data?: KalturaPluginDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
