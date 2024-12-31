import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaChinaCacheAlgorithmType } from './KalturaChinaCacheAlgorithmType';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';
export interface KalturaUrlTokenizerChinaCacheArgs extends KalturaUrlTokenizerArgs {
    algorithmId?: KalturaChinaCacheAlgorithmType;
    keyId?: number;
}
export declare class KalturaUrlTokenizerChinaCache extends KalturaUrlTokenizer {
    algorithmId: KalturaChinaCacheAlgorithmType;
    keyId: number;
    constructor(data?: KalturaUrlTokenizerChinaCacheArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
