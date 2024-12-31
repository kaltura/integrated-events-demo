import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaEmailNotificationRecipientProviderArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaEmailNotificationRecipientProvider extends KalturaObjectBase {
    constructor(data?: KalturaEmailNotificationRecipientProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
