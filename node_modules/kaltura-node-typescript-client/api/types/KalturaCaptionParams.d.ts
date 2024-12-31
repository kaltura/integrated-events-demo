import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCaptionType } from './KalturaCaptionType';
import { KalturaAssetParams, KalturaAssetParamsArgs } from './KalturaAssetParams';
export interface KalturaCaptionParamsArgs extends KalturaAssetParamsArgs {
    language?: KalturaLanguage;
    isDefault?: KalturaNullableBoolean;
    label?: string;
    format?: KalturaCaptionType;
    sourceParamsId?: number;
}
export declare class KalturaCaptionParams extends KalturaAssetParams {
    language: KalturaLanguage;
    isDefault: KalturaNullableBoolean;
    label: string;
    format: KalturaCaptionType;
    sourceParamsId: number;
    constructor(data?: KalturaCaptionParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
