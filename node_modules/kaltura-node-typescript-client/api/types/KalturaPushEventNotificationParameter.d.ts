import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationParameter, KalturaEventNotificationParameterArgs } from './KalturaEventNotificationParameter';
export interface KalturaPushEventNotificationParameterArgs extends KalturaEventNotificationParameterArgs {
    queueKeyToken?: string;
}
export declare class KalturaPushEventNotificationParameter extends KalturaEventNotificationParameter {
    queueKeyToken: string;
    constructor(data?: KalturaPushEventNotificationParameterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
