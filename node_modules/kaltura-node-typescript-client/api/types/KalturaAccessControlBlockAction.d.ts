import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';
export interface KalturaAccessControlBlockActionArgs extends KalturaRuleActionArgs {
}
export declare class KalturaAccessControlBlockAction extends KalturaRuleAction {
    constructor(data?: KalturaAccessControlBlockActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
