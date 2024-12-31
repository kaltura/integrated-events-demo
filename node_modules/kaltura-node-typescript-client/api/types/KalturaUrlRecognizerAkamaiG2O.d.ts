import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUrlRecognizer, KalturaUrlRecognizerArgs } from './KalturaUrlRecognizer';
export interface KalturaUrlRecognizerAkamaiG2OArgs extends KalturaUrlRecognizerArgs {
    headerData?: string;
    headerSign?: string;
    timeout?: number;
    salt?: string;
}
export declare class KalturaUrlRecognizerAkamaiG2O extends KalturaUrlRecognizer {
    headerData: string;
    headerSign: string;
    timeout: number;
    salt: string;
    constructor(data?: KalturaUrlRecognizerAkamaiG2OArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
