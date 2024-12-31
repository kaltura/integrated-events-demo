import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';
export interface KalturaUrlTokenizerVnptArgs extends KalturaUrlTokenizerArgs {
    tokenizationFormat?: number;
    shouldIncludeClientIp?: boolean;
}
export declare class KalturaUrlTokenizerVnpt extends KalturaUrlTokenizer {
    tokenizationFormat: number;
    shouldIncludeClientIp: boolean;
    constructor(data?: KalturaUrlTokenizerVnptArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
