import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaDrmProfileStatus } from './KalturaDrmProfileStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaDrmProfileArgs extends KalturaObjectBaseArgs {
    partnerId?: number;
    name?: string;
    description?: string;
    provider?: KalturaDrmProviderType;
    status?: KalturaDrmProfileStatus;
    licenseServerUrl?: string;
    defaultPolicy?: string;
    signingKey?: string;
}
export declare class KalturaDrmProfile extends KalturaObjectBase {
    readonly id: number;
    partnerId: number;
    name: string;
    description: string;
    provider: KalturaDrmProviderType;
    status: KalturaDrmProfileStatus;
    licenseServerUrl: string;
    defaultPolicy: string;
    readonly createdAt: number;
    readonly updatedAt: number;
    signingKey: string;
    constructor(data?: KalturaDrmProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
