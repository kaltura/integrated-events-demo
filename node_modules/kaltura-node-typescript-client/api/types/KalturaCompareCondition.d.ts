import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaSearchConditionComparison } from './KalturaSearchConditionComparison';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';
export interface KalturaCompareConditionArgs extends KalturaConditionArgs {
    value?: KalturaIntegerValue;
    comparison?: KalturaSearchConditionComparison;
}
export declare class KalturaCompareCondition extends KalturaCondition {
    value: KalturaIntegerValue;
    comparison: KalturaSearchConditionComparison;
    constructor(data?: KalturaCompareConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
