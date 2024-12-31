import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileContainer } from './KalturaFileContainer';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaTransformMetadataJobDataArgs extends KalturaJobDataArgs {
    srcXsl?: KalturaFileContainer;
    srcVersion?: number;
    destVersion?: number;
    destXsd?: KalturaFileContainer;
    metadataProfileId?: number;
}
export declare class KalturaTransformMetadataJobData extends KalturaJobData {
    srcXsl: KalturaFileContainer;
    srcVersion: number;
    destVersion: number;
    destXsd: KalturaFileContainer;
    metadataProfileId: number;
    constructor(data?: KalturaTransformMetadataJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
