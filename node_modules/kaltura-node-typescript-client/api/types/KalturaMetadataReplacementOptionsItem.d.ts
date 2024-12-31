import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPluginReplacementOptionsItem, KalturaPluginReplacementOptionsItemArgs } from './KalturaPluginReplacementOptionsItem';
export interface KalturaMetadataReplacementOptionsItemArgs extends KalturaPluginReplacementOptionsItemArgs {
    shouldCopyMetadata?: boolean;
}
export declare class KalturaMetadataReplacementOptionsItem extends KalturaPluginReplacementOptionsItem {
    shouldCopyMetadata: boolean;
    constructor(data?: KalturaMetadataReplacementOptionsItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
