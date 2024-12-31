import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';
export interface KalturaDataCenterContentResourceArgs extends KalturaContentResourceArgs {
}
export declare class KalturaDataCenterContentResource extends KalturaContentResource {
    constructor(data?: KalturaDataCenterContentResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
