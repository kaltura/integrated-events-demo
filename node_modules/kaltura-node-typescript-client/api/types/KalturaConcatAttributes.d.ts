import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDataCenterContentResource } from './KalturaDataCenterContentResource';
import { KalturaOperationAttributes, KalturaOperationAttributesArgs } from './KalturaOperationAttributes';
export interface KalturaConcatAttributesArgs extends KalturaOperationAttributesArgs {
    resource?: KalturaDataCenterContentResource;
}
export declare class KalturaConcatAttributes extends KalturaOperationAttributes {
    resource: KalturaDataCenterContentResource;
    constructor(data?: KalturaConcatAttributesArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
