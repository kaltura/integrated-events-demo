import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixEntryCompareAttribute } from './KalturaMixEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';
export interface KalturaMixEntryCompareAttributeConditionArgs extends KalturaSearchComparableAttributeConditionArgs {
    attribute?: KalturaMixEntryCompareAttribute;
}
export declare class KalturaMixEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {
    attribute: KalturaMixEntryCompareAttribute;
    constructor(data?: KalturaMixEntryCompareAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
