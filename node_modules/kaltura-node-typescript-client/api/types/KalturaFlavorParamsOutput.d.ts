import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams, KalturaFlavorParamsArgs } from './KalturaFlavorParams';
export interface KalturaFlavorParamsOutputArgs extends KalturaFlavorParamsArgs {
    flavorParamsId?: number;
    commandLinesStr?: string;
    flavorParamsVersion?: string;
    flavorAssetId?: string;
    flavorAssetVersion?: string;
    readyBehavior?: number;
}
export declare class KalturaFlavorParamsOutput extends KalturaFlavorParams {
    flavorParamsId: number;
    commandLinesStr: string;
    flavorParamsVersion: string;
    flavorAssetId: string;
    flavorAssetVersion: string;
    readyBehavior: number;
    constructor(data?: KalturaFlavorParamsOutputArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
