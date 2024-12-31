import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaMetadataProfileStatus } from './KalturaMetadataProfileStatus';
import { KalturaMetadataProfileCreateMode } from './KalturaMetadataProfileCreateMode';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaMetadataProfileArgs extends KalturaObjectBaseArgs {
    metadataObjectType?: KalturaMetadataObjectType;
    name?: string;
    systemName?: string;
    description?: string;
    createMode?: KalturaMetadataProfileCreateMode;
    disableReIndexing?: boolean;
}
export declare class KalturaMetadataProfile extends KalturaObjectBase {
    readonly id: number;
    readonly partnerId: number;
    metadataObjectType: KalturaMetadataObjectType;
    readonly version: number;
    name: string;
    systemName: string;
    description: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly status: KalturaMetadataProfileStatus;
    readonly xsd: string;
    readonly views: string;
    readonly xslt: string;
    createMode: KalturaMetadataProfileCreateMode;
    disableReIndexing: boolean;
    constructor(data?: KalturaMetadataProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
