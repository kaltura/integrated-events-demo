import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';
export interface KalturaUrlTokenizerKsArgs extends KalturaUrlTokenizerArgs {
    usePath?: boolean;
    additionalUris?: string;
}
export declare class KalturaUrlTokenizerKs extends KalturaUrlTokenizer {
    usePath: boolean;
    additionalUris: string;
    constructor(data?: KalturaUrlTokenizerKsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
