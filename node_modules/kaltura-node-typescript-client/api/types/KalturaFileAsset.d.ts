import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileAssetObjectType } from './KalturaFileAssetObjectType';
import { KalturaFileAssetStatus } from './KalturaFileAssetStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaFileAssetArgs extends KalturaObjectBaseArgs {
    fileAssetObjectType?: KalturaFileAssetObjectType;
    objectId?: string;
    name?: string;
    systemName?: string;
    fileExt?: string;
}
export declare class KalturaFileAsset extends KalturaObjectBase {
    readonly id: number;
    readonly partnerId: number;
    fileAssetObjectType: KalturaFileAssetObjectType;
    objectId: string;
    name: string;
    systemName: string;
    fileExt: string;
    readonly version: number;
    readonly createdAt: number;
    readonly updatedAt: number;
    readonly status: KalturaFileAssetStatus;
    constructor(data?: KalturaFileAssetArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
