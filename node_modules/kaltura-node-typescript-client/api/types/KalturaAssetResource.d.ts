import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';
export interface KalturaAssetResourceArgs extends KalturaContentResourceArgs {
    assetId?: string;
}
export declare class KalturaAssetResource extends KalturaContentResource {
    assetId: string;
    constructor(data?: KalturaAssetResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
