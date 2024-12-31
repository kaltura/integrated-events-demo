import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConvartableJobData, KalturaConvartableJobDataArgs } from './KalturaConvartableJobData';
export interface KalturaExtractMediaJobDataArgs extends KalturaConvartableJobDataArgs {
    flavorAssetId?: string;
    calculateComplexity?: boolean;
    extractId3Tags?: boolean;
    destDataFilePath?: string;
    detectGOP?: number;
}
export declare class KalturaExtractMediaJobData extends KalturaConvartableJobData {
    flavorAssetId: string;
    calculateComplexity: boolean;
    extractId3Tags: boolean;
    destDataFilePath: string;
    detectGOP: number;
    constructor(data?: KalturaExtractMediaJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
