import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';
export interface KalturaUrlTokenizerAkamaiSecureHdArgs extends KalturaUrlTokenizerArgs {
    paramName?: string;
    aclPostfix?: string;
    customPostfixes?: string;
    useCookieHosts?: string;
    rootDir?: string;
}
export declare class KalturaUrlTokenizerAkamaiSecureHd extends KalturaUrlTokenizer {
    paramName: string;
    aclPostfix: string;
    customPostfixes: string;
    useCookieHosts: string;
    rootDir: string;
    constructor(data?: KalturaUrlTokenizerAkamaiSecureHdArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
