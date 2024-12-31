import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryContextDataParams, KalturaEntryContextDataParamsArgs } from './KalturaEntryContextDataParams';
export interface KalturaPlaybackContextOptionsArgs extends KalturaEntryContextDataParamsArgs {
}
export declare class KalturaPlaybackContextOptions extends KalturaEntryContextDataParams {
    constructor(data?: KalturaPlaybackContextOptionsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
