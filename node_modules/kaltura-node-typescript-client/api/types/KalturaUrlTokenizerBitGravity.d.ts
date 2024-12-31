import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';
export interface KalturaUrlTokenizerBitGravityArgs extends KalturaUrlTokenizerArgs {
    hashPatternRegex?: string;
}
export declare class KalturaUrlTokenizerBitGravity extends KalturaUrlTokenizer {
    hashPatternRegex: string;
    constructor(data?: KalturaUrlTokenizerBitGravityArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
