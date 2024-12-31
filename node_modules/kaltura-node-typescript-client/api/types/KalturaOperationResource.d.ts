import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOperationAttributes } from './KalturaOperationAttributes';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';
export interface KalturaOperationResourceArgs extends KalturaContentResourceArgs {
    resource?: KalturaContentResource;
    operationAttributes?: KalturaOperationAttributes[];
    assetParamsId?: number;
}
export declare class KalturaOperationResource extends KalturaContentResource {
    resource: KalturaContentResource;
    operationAttributes: KalturaOperationAttributes[];
    assetParamsId: number;
    constructor(data?: KalturaOperationResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
