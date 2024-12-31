import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPluginReplacementOptionsItem } from './KalturaPluginReplacementOptionsItem';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaEntryReplacementOptionsArgs extends KalturaObjectBaseArgs {
    keepManualThumbnails?: number;
    pluginOptionItems?: KalturaPluginReplacementOptionsItem[];
}
export declare class KalturaEntryReplacementOptions extends KalturaObjectBase {
    keepManualThumbnails: number;
    pluginOptionItems: KalturaPluginReplacementOptionsItem[];
    constructor(data?: KalturaEntryReplacementOptionsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
