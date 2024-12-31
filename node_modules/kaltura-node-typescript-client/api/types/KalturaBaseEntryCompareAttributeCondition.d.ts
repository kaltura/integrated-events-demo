import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntryCompareAttribute } from './KalturaBaseEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';
export interface KalturaBaseEntryCompareAttributeConditionArgs extends KalturaSearchComparableAttributeConditionArgs {
    attribute?: KalturaBaseEntryCompareAttribute;
}
export declare class KalturaBaseEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {
    attribute: KalturaBaseEntryCompareAttribute;
    constructor(data?: KalturaBaseEntryCompareAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
