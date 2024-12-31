import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationParameter, KalturaEventNotificationParameterArgs } from './KalturaEventNotificationParameter';
export interface KalturaEmailNotificationParameterArgs extends KalturaEventNotificationParameterArgs {
}
export declare class KalturaEmailNotificationParameter extends KalturaEventNotificationParameter {
    constructor(data?: KalturaEmailNotificationParameterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
