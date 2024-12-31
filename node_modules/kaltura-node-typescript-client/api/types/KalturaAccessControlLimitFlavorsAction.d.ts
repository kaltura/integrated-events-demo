import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';
export interface KalturaAccessControlLimitFlavorsActionArgs extends KalturaRuleActionArgs {
    flavorParamsIds?: string;
    isBlockedList?: boolean;
}
export declare class KalturaAccessControlLimitFlavorsAction extends KalturaRuleAction {
    flavorParamsIds: string;
    isBlockedList: boolean;
    constructor(data?: KalturaAccessControlLimitFlavorsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
