import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfileMapping, KalturaResponseProfileMappingArgs } from './KalturaResponseProfileMapping';
export interface KalturaMetadataResponseProfileMappingArgs extends KalturaResponseProfileMappingArgs {
}
export declare class KalturaMetadataResponseProfileMapping extends KalturaResponseProfileMapping {
    constructor(data?: KalturaMetadataResponseProfileMappingArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
