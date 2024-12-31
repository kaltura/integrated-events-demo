import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams, KalturaFlavorParamsArgs } from './KalturaFlavorParams';
export interface KalturaLiveParamsArgs extends KalturaFlavorParamsArgs {
    streamSuffix?: string;
}
export declare class KalturaLiveParams extends KalturaFlavorParams {
    streamSuffix: string;
    constructor(data?: KalturaLiveParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
