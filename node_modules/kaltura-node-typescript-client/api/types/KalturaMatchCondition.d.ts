import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaMatchConditionType } from './KalturaMatchConditionType';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';
export interface KalturaMatchConditionArgs extends KalturaConditionArgs {
    values?: KalturaStringValue[];
    matchType?: KalturaMatchConditionType;
}
export declare class KalturaMatchCondition extends KalturaCondition {
    values: KalturaStringValue[];
    matchType: KalturaMatchConditionType;
    constructor(data?: KalturaMatchConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
