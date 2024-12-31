import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPluginReplacementOptionsItemArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaPluginReplacementOptionsItem extends KalturaObjectBase {
    constructor(data?: KalturaPluginReplacementOptionsItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
