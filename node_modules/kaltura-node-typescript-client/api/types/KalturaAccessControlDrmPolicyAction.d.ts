import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';
export interface KalturaAccessControlDrmPolicyActionArgs extends KalturaRuleActionArgs {
    policyId?: number;
}
export declare class KalturaAccessControlDrmPolicyAction extends KalturaRuleAction {
    policyId: number;
    constructor(data?: KalturaAccessControlDrmPolicyActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
