import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaString } from './KalturaString';
import { KalturaMediaParserType } from './KalturaMediaParserType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaAssetParamsArgs extends KalturaObjectBaseArgs {
    partnerId?: number;
    name?: string;
    systemName?: string;
    description?: string;
    tags?: string;
    requiredPermissions?: KalturaString[];
    sourceRemoteStorageProfileId?: number;
    remoteStorageProfileIds?: number;
    mediaParserType?: KalturaMediaParserType;
    sourceAssetParamsIds?: string;
}
export declare class KalturaAssetParams extends KalturaObjectBase {
    readonly id: number;
    partnerId: number;
    name: string;
    systemName: string;
    description: string;
    readonly createdAt: Date;
    readonly isSystemDefault: KalturaNullableBoolean;
    tags: string;
    requiredPermissions: KalturaString[];
    sourceRemoteStorageProfileId: number;
    remoteStorageProfileIds: number;
    mediaParserType: KalturaMediaParserType;
    sourceAssetParamsIds: string;
    constructor(data?: KalturaAssetParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
