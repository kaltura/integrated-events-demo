import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntryMatchAttribute } from './KalturaBaseEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';
export interface KalturaBaseEntryMatchAttributeConditionArgs extends KalturaSearchMatchAttributeConditionArgs {
    attribute?: KalturaBaseEntryMatchAttribute;
}
export declare class KalturaBaseEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {
    attribute: KalturaBaseEntryMatchAttribute;
    constructor(data?: KalturaBaseEntryMatchAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
