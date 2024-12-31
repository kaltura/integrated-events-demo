import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPlayerDeliveryTypeArgs extends KalturaObjectBaseArgs {
    id?: string;
    label?: string;
    flashvars?: KalturaKeyValue[];
    minVersion?: string;
    enabledByDefault?: boolean;
}
export declare class KalturaPlayerDeliveryType extends KalturaObjectBase {
    id: string;
    label: string;
    flashvars: KalturaKeyValue[];
    minVersion: string;
    enabledByDefault: boolean;
    constructor(data?: KalturaPlayerDeliveryTypeArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
