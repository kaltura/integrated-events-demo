import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaEventNotificationParameterArgs extends KalturaObjectBaseArgs {
    key?: string;
    description?: string;
    value?: KalturaStringValue;
}
export declare class KalturaEventNotificationParameter extends KalturaObjectBase {
    key: string;
    description: string;
    value: KalturaStringValue;
    constructor(data?: KalturaEventNotificationParameterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
