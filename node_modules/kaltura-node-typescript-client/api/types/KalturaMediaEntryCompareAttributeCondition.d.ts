import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntryCompareAttribute } from './KalturaMediaEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';
export interface KalturaMediaEntryCompareAttributeConditionArgs extends KalturaSearchComparableAttributeConditionArgs {
    attribute?: KalturaMediaEntryCompareAttribute;
}
export declare class KalturaMediaEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {
    attribute: KalturaMediaEntryCompareAttribute;
    constructor(data?: KalturaMediaEntryCompareAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
