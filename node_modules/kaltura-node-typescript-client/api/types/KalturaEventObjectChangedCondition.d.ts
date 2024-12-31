import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';
export interface KalturaEventObjectChangedConditionArgs extends KalturaConditionArgs {
    modifiedColumns?: string;
}
export declare class KalturaEventObjectChangedCondition extends KalturaCondition {
    modifiedColumns: string;
    constructor(data?: KalturaEventObjectChangedConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
