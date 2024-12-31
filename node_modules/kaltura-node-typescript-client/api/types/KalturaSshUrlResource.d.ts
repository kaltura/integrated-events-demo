import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUrlResource, KalturaUrlResourceArgs } from './KalturaUrlResource';
export interface KalturaSshUrlResourceArgs extends KalturaUrlResourceArgs {
    privateKey?: string;
    publicKey?: string;
    keyPassphrase?: string;
}
export declare class KalturaSshUrlResource extends KalturaUrlResource {
    privateKey: string;
    publicKey: string;
    keyPassphrase: string;
    constructor(data?: KalturaSshUrlResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
