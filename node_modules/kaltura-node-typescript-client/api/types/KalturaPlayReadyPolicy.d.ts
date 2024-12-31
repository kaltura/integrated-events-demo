import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyLicenseRemovalPolicy } from './KalturaPlayReadyLicenseRemovalPolicy';
import { KalturaPlayReadyMinimumLicenseSecurityLevel } from './KalturaPlayReadyMinimumLicenseSecurityLevel';
import { KalturaPlayReadyRight } from './KalturaPlayReadyRight';
import { KalturaDrmPolicy, KalturaDrmPolicyArgs } from './KalturaDrmPolicy';
export interface KalturaPlayReadyPolicyArgs extends KalturaDrmPolicyArgs {
    gracePeriod?: number;
    licenseRemovalPolicy?: KalturaPlayReadyLicenseRemovalPolicy;
    licenseRemovalDuration?: number;
    minSecurityLevel?: KalturaPlayReadyMinimumLicenseSecurityLevel;
    rights?: KalturaPlayReadyRight[];
}
export declare class KalturaPlayReadyPolicy extends KalturaDrmPolicy {
    gracePeriod: number;
    licenseRemovalPolicy: KalturaPlayReadyLicenseRemovalPolicy;
    licenseRemovalDuration: number;
    minSecurityLevel: KalturaPlayReadyMinimumLicenseSecurityLevel;
    rights: KalturaPlayReadyRight[];
    constructor(data?: KalturaPlayReadyPolicyArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
