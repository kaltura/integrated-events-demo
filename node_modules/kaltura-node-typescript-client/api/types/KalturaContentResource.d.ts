import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResource, KalturaResourceArgs } from './KalturaResource';
export interface KalturaContentResourceArgs extends KalturaResourceArgs {
}
export declare class KalturaContentResource extends KalturaResource {
    constructor(data?: KalturaContentResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
