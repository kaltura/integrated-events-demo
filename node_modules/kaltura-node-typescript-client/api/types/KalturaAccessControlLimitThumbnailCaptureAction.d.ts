import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';
export interface KalturaAccessControlLimitThumbnailCaptureActionArgs extends KalturaRuleActionArgs {
}
export declare class KalturaAccessControlLimitThumbnailCaptureAction extends KalturaRuleAction {
    constructor(data?: KalturaAccessControlLimitThumbnailCaptureActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
