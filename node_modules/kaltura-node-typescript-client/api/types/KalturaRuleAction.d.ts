import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRuleActionType } from './KalturaRuleActionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaRuleActionArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaRuleAction extends KalturaObjectBase {
    readonly type: KalturaRuleActionType;
    constructor(data?: KalturaRuleActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
