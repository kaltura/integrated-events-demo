import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringField } from './KalturaStringField';
import { KalturaMatchCondition, KalturaMatchConditionArgs } from './KalturaMatchCondition';
export interface KalturaFieldMatchConditionArgs extends KalturaMatchConditionArgs {
    field?: KalturaStringField;
}
export declare class KalturaFieldMatchCondition extends KalturaMatchCondition {
    field: KalturaStringField;
    constructor(data?: KalturaFieldMatchConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
