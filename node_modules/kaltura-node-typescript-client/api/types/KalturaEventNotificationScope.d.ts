import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaScope, KalturaScopeArgs } from './KalturaScope';
export interface KalturaEventNotificationScopeArgs extends KalturaScopeArgs {
    objectId?: string;
    scopeObjectType?: KalturaEventNotificationEventObjectType;
}
export declare class KalturaEventNotificationScope extends KalturaScope {
    objectId: string;
    scopeObjectType: KalturaEventNotificationEventObjectType;
    constructor(data?: KalturaEventNotificationScopeArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
