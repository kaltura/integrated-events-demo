import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMatchCondition, KalturaMatchConditionArgs } from './KalturaMatchCondition';
export interface KalturaRegexConditionArgs extends KalturaMatchConditionArgs {
}
export declare class KalturaRegexCondition extends KalturaMatchCondition {
    constructor(data?: KalturaRegexConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
