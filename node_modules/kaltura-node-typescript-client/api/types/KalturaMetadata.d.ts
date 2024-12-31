import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaMetadataStatus } from './KalturaMetadataStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaMetadataArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaMetadata extends KalturaObjectBase {
    readonly id: number;
    readonly partnerId: number;
    readonly metadataProfileId: number;
    readonly metadataProfileVersion: number;
    readonly metadataObjectType: KalturaMetadataObjectType;
    readonly objectId: string;
    readonly version: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly status: KalturaMetadataStatus;
    readonly xml: string;
    constructor(data?: KalturaMetadataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
