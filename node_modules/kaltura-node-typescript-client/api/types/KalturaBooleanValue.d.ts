import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaValue, KalturaValueArgs } from './KalturaValue';
export interface KalturaBooleanValueArgs extends KalturaValueArgs {
    value?: boolean;
}
export declare class KalturaBooleanValue extends KalturaValue {
    value: boolean;
    constructor(data?: KalturaBooleanValueArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
