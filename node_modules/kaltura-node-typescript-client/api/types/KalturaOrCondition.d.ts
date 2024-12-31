import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';
export interface KalturaOrConditionArgs extends KalturaConditionArgs {
    conditions?: KalturaCondition[];
}
export declare class KalturaOrCondition extends KalturaCondition {
    conditions: KalturaCondition[];
    constructor(data?: KalturaOrConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
