import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaContentResource } from './KalturaContentResource';
import { KalturaResource, KalturaResourceArgs } from './KalturaResource';
export interface KalturaAssetParamsResourceContainerArgs extends KalturaResourceArgs {
    resource?: KalturaContentResource;
    assetParamsId?: number;
}
export declare class KalturaAssetParamsResourceContainer extends KalturaResource {
    resource: KalturaContentResource;
    assetParamsId: number;
    constructor(data?: KalturaAssetParamsResourceContainerArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
