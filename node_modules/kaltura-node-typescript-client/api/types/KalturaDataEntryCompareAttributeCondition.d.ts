import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDataEntryCompareAttribute } from './KalturaDataEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';
export interface KalturaDataEntryCompareAttributeConditionArgs extends KalturaSearchComparableAttributeConditionArgs {
    attribute?: KalturaDataEntryCompareAttribute;
}
export declare class KalturaDataEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {
    attribute: KalturaDataEntryCompareAttribute;
    constructor(data?: KalturaDataEntryCompareAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
