import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntryCompareAttribute } from './KalturaLiveStreamEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';
export interface KalturaLiveStreamEntryCompareAttributeConditionArgs extends KalturaSearchComparableAttributeConditionArgs {
    attribute?: KalturaLiveStreamEntryCompareAttribute;
}
export declare class KalturaLiveStreamEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {
    attribute: KalturaLiveStreamEntryCompareAttribute;
    constructor(data?: KalturaLiveStreamEntryCompareAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
