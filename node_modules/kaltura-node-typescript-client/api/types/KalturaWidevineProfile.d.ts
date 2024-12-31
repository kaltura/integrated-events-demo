import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfile, KalturaDrmProfileArgs } from './KalturaDrmProfile';
export interface KalturaWidevineProfileArgs extends KalturaDrmProfileArgs {
    key?: string;
    iv?: string;
    owner?: string;
    portal?: string;
    maxGop?: number;
    regServerHost?: string;
}
export declare class KalturaWidevineProfile extends KalturaDrmProfile {
    key: string;
    iv: string;
    owner: string;
    portal: string;
    maxGop: number;
    regServerHost: string;
    constructor(data?: KalturaWidevineProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
