import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAssetStatus } from './KalturaFlavorAssetStatus';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';
export interface KalturaFlavorAssetArgs extends KalturaAssetArgs {
    flavorParamsId?: number;
    language?: KalturaLanguage;
    label?: string;
    isDefault?: KalturaNullableBoolean;
}
export declare class KalturaFlavorAsset extends KalturaAsset {
    flavorParamsId: number;
    readonly width: number;
    readonly height: number;
    readonly bitrate: number;
    readonly frameRate: number;
    readonly isOriginal: boolean;
    readonly isWeb: boolean;
    readonly containerFormat: string;
    readonly videoCodecId: string;
    readonly status: KalturaFlavorAssetStatus;
    language: KalturaLanguage;
    label: string;
    isDefault: KalturaNullableBoolean;
    constructor(data?: KalturaFlavorAssetArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
