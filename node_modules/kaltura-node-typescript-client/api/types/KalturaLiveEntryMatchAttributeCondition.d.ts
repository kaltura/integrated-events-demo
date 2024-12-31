import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntryMatchAttribute } from './KalturaLiveEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';
export interface KalturaLiveEntryMatchAttributeConditionArgs extends KalturaSearchMatchAttributeConditionArgs {
    attribute?: KalturaLiveEntryMatchAttribute;
}
export declare class KalturaLiveEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {
    attribute: KalturaLiveEntryMatchAttribute;
    constructor(data?: KalturaLiveEntryMatchAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
