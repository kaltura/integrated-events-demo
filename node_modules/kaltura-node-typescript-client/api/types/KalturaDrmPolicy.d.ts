import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaDrmPolicyStatus } from './KalturaDrmPolicyStatus';
import { KalturaDrmLicenseScenario } from './KalturaDrmLicenseScenario';
import { KalturaDrmLicenseType } from './KalturaDrmLicenseType';
import { KalturaDrmLicenseExpirationPolicy } from './KalturaDrmLicenseExpirationPolicy';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaDrmPolicyArgs extends KalturaObjectBaseArgs {
    partnerId?: number;
    name?: string;
    systemName?: string;
    description?: string;
    provider?: KalturaDrmProviderType;
    status?: KalturaDrmPolicyStatus;
    scenario?: KalturaDrmLicenseScenario;
    licenseType?: KalturaDrmLicenseType;
    licenseExpirationPolicy?: KalturaDrmLicenseExpirationPolicy;
    duration?: number;
    licenseParams?: KalturaKeyValue[];
}
export declare class KalturaDrmPolicy extends KalturaObjectBase {
    readonly id: number;
    partnerId: number;
    name: string;
    systemName: string;
    description: string;
    provider: KalturaDrmProviderType;
    status: KalturaDrmPolicyStatus;
    scenario: KalturaDrmLicenseScenario;
    licenseType: KalturaDrmLicenseType;
    licenseExpirationPolicy: KalturaDrmLicenseExpirationPolicy;
    duration: number;
    readonly createdAt: number;
    readonly updatedAt: number;
    licenseParams: KalturaKeyValue[];
    constructor(data?: KalturaDrmPolicyArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
