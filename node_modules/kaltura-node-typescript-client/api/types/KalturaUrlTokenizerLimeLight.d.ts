import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';
export interface KalturaUrlTokenizerLimeLightArgs extends KalturaUrlTokenizerArgs {
}
export declare class KalturaUrlTokenizerLimeLight extends KalturaUrlTokenizer {
    constructor(data?: KalturaUrlTokenizerLimeLightArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
