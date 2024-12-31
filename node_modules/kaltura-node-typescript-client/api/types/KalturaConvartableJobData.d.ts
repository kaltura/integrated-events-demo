import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSourceFileSyncDescriptor } from './KalturaSourceFileSyncDescriptor';
import { KalturaFlavorParamsOutput } from './KalturaFlavorParamsOutput';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaConvartableJobDataArgs extends KalturaJobDataArgs {
    srcFileSyncLocalPath?: string;
    actualSrcFileSyncLocalPath?: string;
    srcFileSyncRemoteUrl?: string;
    srcFileSyncs?: KalturaSourceFileSyncDescriptor[];
    engineVersion?: number;
    flavorParamsOutputId?: number;
    flavorParamsOutput?: KalturaFlavorParamsOutput;
    mediaInfoId?: number;
    currentOperationSet?: number;
    currentOperationIndex?: number;
    pluginData?: KalturaKeyValue[];
}
export declare class KalturaConvartableJobData extends KalturaJobData {
    srcFileSyncLocalPath: string;
    actualSrcFileSyncLocalPath: string;
    srcFileSyncRemoteUrl: string;
    srcFileSyncs: KalturaSourceFileSyncDescriptor[];
    engineVersion: number;
    flavorParamsOutputId: number;
    flavorParamsOutput: KalturaFlavorParamsOutput;
    mediaInfoId: number;
    currentOperationSet: number;
    currentOperationIndex: number;
    pluginData: KalturaKeyValue[];
    constructor(data?: KalturaConvartableJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
