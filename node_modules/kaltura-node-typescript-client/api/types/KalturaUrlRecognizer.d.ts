import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaUrlRecognizerArgs extends KalturaObjectBaseArgs {
    hosts?: string;
    uriPrefix?: string;
}
export declare class KalturaUrlRecognizer extends KalturaObjectBase {
    hosts: string;
    uriPrefix: string;
    constructor(data?: KalturaUrlRecognizerArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
