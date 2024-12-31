import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntryMatchAttribute } from './KalturaMediaEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';
export interface KalturaMediaEntryMatchAttributeConditionArgs extends KalturaSearchMatchAttributeConditionArgs {
    attribute?: KalturaMediaEntryMatchAttribute;
}
export declare class KalturaMediaEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {
    attribute: KalturaMediaEntryMatchAttribute;
    constructor(data?: KalturaMediaEntryMatchAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
