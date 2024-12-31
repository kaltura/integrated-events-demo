import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfile, KalturaDrmProfileArgs } from './KalturaDrmProfile';
export interface KalturaPlayReadyProfileArgs extends KalturaDrmProfileArgs {
    keySeed?: string;
}
export declare class KalturaPlayReadyProfile extends KalturaDrmProfile {
    keySeed: string;
    constructor(data?: KalturaPlayReadyProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
