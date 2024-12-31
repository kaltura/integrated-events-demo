import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';
export interface KalturaUrlTokenizerAkamaiRtmpArgs extends KalturaUrlTokenizerArgs {
    profile?: string;
    type?: string;
    aifp?: string;
    usePrefix?: boolean;
}
export declare class KalturaUrlTokenizerAkamaiRtmp extends KalturaUrlTokenizer {
    profile: string;
    type: string;
    aifp: string;
    usePrefix: boolean;
    constructor(data?: KalturaUrlTokenizerAkamaiRtmpArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
