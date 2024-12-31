import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayableEntryCompareAttribute } from './KalturaPlayableEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';
export interface KalturaPlayableEntryCompareAttributeConditionArgs extends KalturaSearchComparableAttributeConditionArgs {
    attribute?: KalturaPlayableEntryCompareAttribute;
}
export declare class KalturaPlayableEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {
    attribute: KalturaPlayableEntryCompareAttribute;
    constructor(data?: KalturaPlayableEntryCompareAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
