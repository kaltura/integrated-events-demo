import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchConditionComparison } from './KalturaSearchConditionComparison';
import { KalturaSearchCondition, KalturaSearchConditionArgs } from './KalturaSearchCondition';
export interface KalturaSearchComparableConditionArgs extends KalturaSearchConditionArgs {
    comparison?: KalturaSearchConditionComparison;
}
export declare class KalturaSearchComparableCondition extends KalturaSearchCondition {
    comparison: KalturaSearchConditionComparison;
    constructor(data?: KalturaSearchComparableConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
