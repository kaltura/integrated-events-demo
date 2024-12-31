import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';
export interface KalturaAccessControlPreviewActionArgs extends KalturaRuleActionArgs {
    limit?: number;
}
export declare class KalturaAccessControlPreviewAction extends KalturaRuleAction {
    limit: number;
    constructor(data?: KalturaAccessControlPreviewActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
