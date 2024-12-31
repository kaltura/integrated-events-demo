import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaValue, KalturaValueArgs } from './KalturaValue';
export interface KalturaIntegerValueArgs extends KalturaValueArgs {
    value?: number;
}
export declare class KalturaIntegerValue extends KalturaValue {
    value: number;
    constructor(data?: KalturaIntegerValueArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
