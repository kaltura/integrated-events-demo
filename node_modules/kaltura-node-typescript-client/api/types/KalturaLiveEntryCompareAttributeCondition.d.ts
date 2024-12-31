import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntryCompareAttribute } from './KalturaLiveEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';
export interface KalturaLiveEntryCompareAttributeConditionArgs extends KalturaSearchComparableAttributeConditionArgs {
    attribute?: KalturaLiveEntryCompareAttribute;
}
export declare class KalturaLiveEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {
    attribute: KalturaLiveEntryCompareAttribute;
    constructor(data?: KalturaLiveEntryCompareAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
