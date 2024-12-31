import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaEventNotificationParameter, KalturaEventNotificationParameterArgs } from './KalturaEventNotificationParameter';
export interface KalturaEventNotificationArrayParameterArgs extends KalturaEventNotificationParameterArgs {
    values?: KalturaString[];
    allowedValues?: KalturaStringValue[];
}
export declare class KalturaEventNotificationArrayParameter extends KalturaEventNotificationParameter {
    values: KalturaString[];
    allowedValues: KalturaStringValue[];
    constructor(data?: KalturaEventNotificationArrayParameterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
