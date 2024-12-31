import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';
export interface KalturaUrlTokenizerVelocixArgs extends KalturaUrlTokenizerArgs {
    hdsPaths?: string;
    paramName?: string;
    authPrefix?: string;
}
export declare class KalturaUrlTokenizerVelocix extends KalturaUrlTokenizer {
    hdsPaths: string;
    paramName: string;
    authPrefix: string;
    constructor(data?: KalturaUrlTokenizerVelocixArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
