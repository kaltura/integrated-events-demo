import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderContentFileHandlerMatchPolicy } from './KalturaDropFolderContentFileHandlerMatchPolicy';
import { KalturaDropFolderFileHandlerConfig, KalturaDropFolderFileHandlerConfigArgs } from './KalturaDropFolderFileHandlerConfig';
export interface KalturaDropFolderContentFileHandlerConfigArgs extends KalturaDropFolderFileHandlerConfigArgs {
    contentMatchPolicy?: KalturaDropFolderContentFileHandlerMatchPolicy;
    slugRegex?: string;
}
export declare class KalturaDropFolderContentFileHandlerConfig extends KalturaDropFolderFileHandlerConfig {
    contentMatchPolicy: KalturaDropFolderContentFileHandlerMatchPolicy;
    slugRegex: string;
    constructor(data?: KalturaDropFolderContentFileHandlerConfigArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
