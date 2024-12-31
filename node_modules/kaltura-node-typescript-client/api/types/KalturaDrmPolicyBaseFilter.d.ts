import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaDrmPolicyStatus } from './KalturaDrmPolicyStatus';
import { KalturaDrmLicenseScenario } from './KalturaDrmLicenseScenario';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaDrmPolicyBaseFilterArgs extends KalturaFilterArgs {
    partnerIdEqual?: number;
    partnerIdIn?: string;
    nameLike?: string;
    systemNameLike?: string;
    providerEqual?: KalturaDrmProviderType;
    providerIn?: string;
    statusEqual?: KalturaDrmPolicyStatus;
    statusIn?: string;
    scenarioEqual?: KalturaDrmLicenseScenario;
    scenarioIn?: string;
}
export declare class KalturaDrmPolicyBaseFilter extends KalturaFilter {
    partnerIdEqual: number;
    partnerIdIn: string;
    nameLike: string;
    systemNameLike: string;
    providerEqual: KalturaDrmProviderType;
    providerIn: string;
    statusEqual: KalturaDrmPolicyStatus;
    statusIn: string;
    scenarioEqual: KalturaDrmLicenseScenario;
    scenarioIn: string;
    constructor(data?: KalturaDrmPolicyBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
