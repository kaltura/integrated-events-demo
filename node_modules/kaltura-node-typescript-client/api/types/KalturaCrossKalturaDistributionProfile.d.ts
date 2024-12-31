import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaCrossKalturaDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    targetServiceUrl?: string;
    targetAccountId?: number;
    targetLoginId?: string;
    targetLoginPassword?: string;
    metadataXslt?: string;
    metadataXpathsTriggerUpdate?: KalturaStringValue[];
    distributeCaptions?: boolean;
    distributeCuePoints?: boolean;
    distributeRemoteFlavorAssetContent?: boolean;
    distributeRemoteThumbAssetContent?: boolean;
    distributeRemoteCaptionAssetContent?: boolean;
    mapAccessControlProfileIds?: KalturaKeyValue[];
    mapConversionProfileIds?: KalturaKeyValue[];
    mapMetadataProfileIds?: KalturaKeyValue[];
    mapStorageProfileIds?: KalturaKeyValue[];
    mapFlavorParamsIds?: KalturaKeyValue[];
    mapThumbParamsIds?: KalturaKeyValue[];
    mapCaptionParamsIds?: KalturaKeyValue[];
}
export declare class KalturaCrossKalturaDistributionProfile extends KalturaConfigurableDistributionProfile {
    targetServiceUrl: string;
    targetAccountId: number;
    targetLoginId: string;
    targetLoginPassword: string;
    metadataXslt: string;
    metadataXpathsTriggerUpdate: KalturaStringValue[];
    distributeCaptions: boolean;
    distributeCuePoints: boolean;
    distributeRemoteFlavorAssetContent: boolean;
    distributeRemoteThumbAssetContent: boolean;
    distributeRemoteCaptionAssetContent: boolean;
    mapAccessControlProfileIds: KalturaKeyValue[];
    mapConversionProfileIds: KalturaKeyValue[];
    mapMetadataProfileIds: KalturaKeyValue[];
    mapStorageProfileIds: KalturaKeyValue[];
    mapFlavorParamsIds: KalturaKeyValue[];
    mapThumbParamsIds: KalturaKeyValue[];
    mapCaptionParamsIds: KalturaKeyValue[];
    constructor(data?: KalturaCrossKalturaDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
