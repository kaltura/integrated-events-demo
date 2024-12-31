import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControlScope, KalturaAccessControlScopeArgs } from './KalturaAccessControlScope';
export interface KalturaEntryContextDataParamsArgs extends KalturaAccessControlScopeArgs {
    flavorAssetId?: string;
    flavorTags?: string;
    streamerType?: string;
    mediaProtocol?: string;
}
export declare class KalturaEntryContextDataParams extends KalturaAccessControlScope {
    flavorAssetId: string;
    flavorTags: string;
    streamerType: string;
    mediaProtocol: string;
    constructor(data?: KalturaEntryContextDataParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
