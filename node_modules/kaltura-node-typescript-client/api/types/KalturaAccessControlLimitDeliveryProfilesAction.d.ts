import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';
export interface KalturaAccessControlLimitDeliveryProfilesActionArgs extends KalturaRuleActionArgs {
    deliveryProfileIds?: string;
    isBlockedList?: boolean;
}
export declare class KalturaAccessControlLimitDeliveryProfilesAction extends KalturaRuleAction {
    deliveryProfileIds: string;
    isBlockedList: boolean;
    constructor(data?: KalturaAccessControlLimitDeliveryProfilesActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
