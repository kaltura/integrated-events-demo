import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyPolicy } from './KalturaPlayReadyPolicy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPlayReadyLicenseDetailsArgs extends KalturaObjectBaseArgs {
    policy?: KalturaPlayReadyPolicy;
    beginDate?: number;
    expirationDate?: number;
    removalDate?: number;
}
export declare class KalturaPlayReadyLicenseDetails extends KalturaObjectBase {
    policy: KalturaPlayReadyPolicy;
    beginDate: number;
    expirationDate: number;
    removalDate: number;
    constructor(data?: KalturaPlayReadyLicenseDetailsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
