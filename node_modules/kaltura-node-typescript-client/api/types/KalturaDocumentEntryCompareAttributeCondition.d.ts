import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntryCompareAttribute } from './KalturaDocumentEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';
export interface KalturaDocumentEntryCompareAttributeConditionArgs extends KalturaSearchComparableAttributeConditionArgs {
    attribute?: KalturaDocumentEntryCompareAttribute;
}
export declare class KalturaDocumentEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {
    attribute: KalturaDocumentEntryCompareAttribute;
    constructor(data?: KalturaDocumentEntryCompareAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
