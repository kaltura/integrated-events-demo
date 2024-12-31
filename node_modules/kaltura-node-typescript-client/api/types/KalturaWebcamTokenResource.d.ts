import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDataCenterContentResource, KalturaDataCenterContentResourceArgs } from './KalturaDataCenterContentResource';
export interface KalturaWebcamTokenResourceArgs extends KalturaDataCenterContentResourceArgs {
    token?: string;
}
export declare class KalturaWebcamTokenResource extends KalturaDataCenterContentResource {
    token: string;
    constructor(data?: KalturaWebcamTokenResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
