import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylistMatchAttribute } from './KalturaPlaylistMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';
export interface KalturaPlaylistMatchAttributeConditionArgs extends KalturaSearchMatchAttributeConditionArgs {
    attribute?: KalturaPlaylistMatchAttribute;
}
export declare class KalturaPlaylistMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {
    attribute: KalturaPlaylistMatchAttribute;
    constructor(data?: KalturaPlaylistMatchAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
