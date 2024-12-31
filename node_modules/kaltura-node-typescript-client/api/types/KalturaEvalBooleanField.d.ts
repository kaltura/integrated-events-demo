import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBooleanField, KalturaBooleanFieldArgs } from './KalturaBooleanField';
export interface KalturaEvalBooleanFieldArgs extends KalturaBooleanFieldArgs {
    code?: string;
}
export declare class KalturaEvalBooleanField extends KalturaBooleanField {
    code: string;
    constructor(data?: KalturaEvalBooleanFieldArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
