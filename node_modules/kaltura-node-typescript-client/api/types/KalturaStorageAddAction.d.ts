import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';
export interface KalturaStorageAddActionArgs extends KalturaRuleActionArgs {
}
export declare class KalturaStorageAddAction extends KalturaRuleAction {
    constructor(data?: KalturaStorageAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
