import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';
export interface KalturaUrlTokenizerAkamaiHttpArgs extends KalturaUrlTokenizerArgs {
    paramName?: string;
    rootDir?: string;
}
export declare class KalturaUrlTokenizerAkamaiHttp extends KalturaUrlTokenizer {
    paramName: string;
    rootDir: string;
    constructor(data?: KalturaUrlTokenizerAkamaiHttpArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
