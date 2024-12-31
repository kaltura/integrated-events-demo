import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectIdentifier } from './KalturaObjectIdentifier';
import { KalturaMrssExtensionMode } from './KalturaMrssExtensionMode';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaExtendingItemMrssParameterArgs extends KalturaObjectBaseArgs {
    xpath?: string;
    identifier?: KalturaObjectIdentifier;
    extensionMode?: KalturaMrssExtensionMode;
}
export declare class KalturaExtendingItemMrssParameter extends KalturaObjectBase {
    xpath: string;
    identifier: KalturaObjectIdentifier;
    extensionMode: KalturaMrssExtensionMode;
    constructor(data?: KalturaExtendingItemMrssParameterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
