import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDataCenterContentResource, KalturaDataCenterContentResourceArgs } from './KalturaDataCenterContentResource';
export interface KalturaGenericDataCenterContentResourceArgs extends KalturaDataCenterContentResourceArgs {
}
export declare class KalturaGenericDataCenterContentResource extends KalturaDataCenterContentResource {
    constructor(data?: KalturaGenericDataCenterContentResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
