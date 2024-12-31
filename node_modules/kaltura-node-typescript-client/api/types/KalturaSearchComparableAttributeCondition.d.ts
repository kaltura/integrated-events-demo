import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchConditionComparison } from './KalturaSearchConditionComparison';
import { KalturaAttributeCondition, KalturaAttributeConditionArgs } from './KalturaAttributeCondition';
export interface KalturaSearchComparableAttributeConditionArgs extends KalturaAttributeConditionArgs {
    comparison?: KalturaSearchConditionComparison;
}
export declare class KalturaSearchComparableAttributeCondition extends KalturaAttributeCondition {
    comparison: KalturaSearchConditionComparison;
    constructor(data?: KalturaSearchComparableAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
