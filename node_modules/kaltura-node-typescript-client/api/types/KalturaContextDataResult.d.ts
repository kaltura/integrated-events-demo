import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaRuleAction } from './KalturaRuleAction';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaContextDataResultArgs extends KalturaObjectBaseArgs {
    messages?: KalturaString[];
    actions?: KalturaRuleAction[];
}
export declare class KalturaContextDataResult extends KalturaObjectBase {
    messages: KalturaString[];
    actions: KalturaRuleAction[];
    constructor(data?: KalturaContextDataResultArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
