import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIntegerField } from './KalturaIntegerField';
import { KalturaCompareCondition, KalturaCompareConditionArgs } from './KalturaCompareCondition';
export interface KalturaFieldCompareConditionArgs extends KalturaCompareConditionArgs {
    field?: KalturaIntegerField;
}
export declare class KalturaFieldCompareCondition extends KalturaCompareCondition {
    field: KalturaIntegerField;
    constructor(data?: KalturaFieldCompareConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
