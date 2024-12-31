import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntryMatchAttribute } from './KalturaLiveStreamEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';
export interface KalturaLiveStreamEntryMatchAttributeConditionArgs extends KalturaSearchMatchAttributeConditionArgs {
    attribute?: KalturaLiveStreamEntryMatchAttribute;
}
export declare class KalturaLiveStreamEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {
    attribute: KalturaLiveStreamEntryMatchAttribute;
    constructor(data?: KalturaLiveStreamEntryMatchAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
