import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';
export interface KalturaUrlTokenizerCloudFrontArgs extends KalturaUrlTokenizerArgs {
    keyPairId?: string;
    rootDir?: string;
}
export declare class KalturaUrlTokenizerCloudFront extends KalturaUrlTokenizer {
    keyPairId: string;
    rootDir: string;
    constructor(data?: KalturaUrlTokenizerCloudFrontArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
