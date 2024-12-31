import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBooleanValue, KalturaBooleanValueArgs } from './KalturaBooleanValue';
export interface KalturaBooleanFieldArgs extends KalturaBooleanValueArgs {
}
export declare class KalturaBooleanField extends KalturaBooleanValue {
    constructor(data?: KalturaBooleanFieldArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
