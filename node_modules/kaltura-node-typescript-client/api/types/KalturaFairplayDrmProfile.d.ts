import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfile, KalturaDrmProfileArgs } from './KalturaDrmProfile';
export interface KalturaFairplayDrmProfileArgs extends KalturaDrmProfileArgs {
    publicCertificate?: string;
}
export declare class KalturaFairplayDrmProfile extends KalturaDrmProfile {
    publicCertificate: string;
    constructor(data?: KalturaFairplayDrmProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
