import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaFlavorParams } from './KalturaFlavorParams';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaFlavorAssetWithParamsArgs extends KalturaObjectBaseArgs {
    flavorAsset?: KalturaFlavorAsset;
    flavorParams?: KalturaFlavorParams;
    entryId?: string;
}
export declare class KalturaFlavorAssetWithParams extends KalturaObjectBase {
    flavorAsset: KalturaFlavorAsset;
    flavorParams: KalturaFlavorParams;
    entryId: string;
    constructor(data?: KalturaFlavorAssetWithParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
