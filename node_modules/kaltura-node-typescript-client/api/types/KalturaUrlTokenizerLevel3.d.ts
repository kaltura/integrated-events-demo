import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';
export interface KalturaUrlTokenizerLevel3Args extends KalturaUrlTokenizerArgs {
    paramName?: string;
    expiryName?: string;
    gen?: string;
}
export declare class KalturaUrlTokenizerLevel3 extends KalturaUrlTokenizer {
    paramName: string;
    expiryName: string;
    gen: string;
    constructor(data?: KalturaUrlTokenizerLevel3Args);
    protected _getMetadata(): KalturaObjectMetadata;
}
