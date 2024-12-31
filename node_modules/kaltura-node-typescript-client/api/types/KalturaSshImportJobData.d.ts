import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaImportJobData, KalturaImportJobDataArgs } from './KalturaImportJobData';
export interface KalturaSshImportJobDataArgs extends KalturaImportJobDataArgs {
    privateKey?: string;
    publicKey?: string;
    passPhrase?: string;
}
export declare class KalturaSshImportJobData extends KalturaImportJobData {
    privateKey: string;
    publicKey: string;
    passPhrase: string;
    constructor(data?: KalturaSshImportJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
