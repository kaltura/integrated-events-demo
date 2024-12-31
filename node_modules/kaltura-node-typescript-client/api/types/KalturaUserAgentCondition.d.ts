import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRegexCondition, KalturaRegexConditionArgs } from './KalturaRegexCondition';
export interface KalturaUserAgentConditionArgs extends KalturaRegexConditionArgs {
}
export declare class KalturaUserAgentCondition extends KalturaRegexCondition {
    constructor(data?: KalturaUserAgentConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
