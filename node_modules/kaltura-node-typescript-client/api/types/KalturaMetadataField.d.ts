import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';
export interface KalturaMetadataFieldArgs extends KalturaStringFieldArgs {
    xPath?: string;
    profileId?: number;
    profileSystemName?: string;
}
export declare class KalturaMetadataField extends KalturaStringField {
    xPath: string;
    profileId: number;
    profileSystemName: string;
    constructor(data?: KalturaMetadataFieldArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
