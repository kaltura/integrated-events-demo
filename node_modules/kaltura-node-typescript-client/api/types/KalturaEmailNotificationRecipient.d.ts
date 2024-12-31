import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaEmailNotificationRecipientArgs extends KalturaObjectBaseArgs {
    email?: KalturaStringValue;
    name?: KalturaStringValue;
}
export declare class KalturaEmailNotificationRecipient extends KalturaObjectBase {
    email: KalturaStringValue;
    name: KalturaStringValue;
    constructor(data?: KalturaEmailNotificationRecipientArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
