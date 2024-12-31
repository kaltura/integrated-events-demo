import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalMediaEntryCompareAttribute } from './KalturaExternalMediaEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';
export interface KalturaExternalMediaEntryCompareAttributeConditionArgs extends KalturaSearchComparableAttributeConditionArgs {
    attribute?: KalturaExternalMediaEntryCompareAttribute;
}
export declare class KalturaExternalMediaEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {
    attribute: KalturaExternalMediaEntryCompareAttribute;
    constructor(data?: KalturaExternalMediaEntryCompareAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
