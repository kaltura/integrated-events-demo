import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixEntryMatchAttribute } from './KalturaMixEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';
export interface KalturaMixEntryMatchAttributeConditionArgs extends KalturaSearchMatchAttributeConditionArgs {
    attribute?: KalturaMixEntryMatchAttribute;
}
export declare class KalturaMixEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {
    attribute: KalturaMixEntryMatchAttribute;
    constructor(data?: KalturaMixEntryMatchAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
