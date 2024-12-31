import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetParamsResourceContainer } from './KalturaAssetParamsResourceContainer';
import { KalturaResource, KalturaResourceArgs } from './KalturaResource';
export interface KalturaAssetsParamsResourceContainersArgs extends KalturaResourceArgs {
    resources?: KalturaAssetParamsResourceContainer[];
}
export declare class KalturaAssetsParamsResourceContainers extends KalturaResource {
    resources: KalturaAssetParamsResourceContainer[];
    constructor(data?: KalturaAssetsParamsResourceContainersArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
