import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIntegerValue, KalturaIntegerValueArgs } from './KalturaIntegerValue';
export interface KalturaIntegerFieldArgs extends KalturaIntegerValueArgs {
}
export declare class KalturaIntegerField extends KalturaIntegerValue {
    constructor(data?: KalturaIntegerFieldArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
