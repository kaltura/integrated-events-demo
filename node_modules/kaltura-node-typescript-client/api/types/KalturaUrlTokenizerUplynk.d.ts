import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';
export interface KalturaUrlTokenizerUplynkArgs extends KalturaUrlTokenizerArgs {
    accountId?: string;
}
export declare class KalturaUrlTokenizerUplynk extends KalturaUrlTokenizer {
    accountId: string;
    constructor(data?: KalturaUrlTokenizerUplynkArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
