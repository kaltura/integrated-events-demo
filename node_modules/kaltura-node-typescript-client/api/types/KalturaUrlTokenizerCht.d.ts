import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';
export interface KalturaUrlTokenizerChtArgs extends KalturaUrlTokenizerArgs {
}
export declare class KalturaUrlTokenizerCht extends KalturaUrlTokenizer {
    constructor(data?: KalturaUrlTokenizerChtArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
