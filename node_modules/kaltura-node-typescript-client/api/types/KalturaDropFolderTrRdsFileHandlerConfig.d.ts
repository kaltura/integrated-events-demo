import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFileHandlerConfig, KalturaDropFolderFileHandlerConfigArgs } from './KalturaDropFolderFileHandlerConfig';
export interface KalturaDropFolderTrRdsFileHandlerConfigArgs extends KalturaDropFolderFileHandlerConfigArgs {
    leadPattern?: string;
    additionalPatterns?: string;
}
export declare class KalturaDropFolderTrRdsFileHandlerConfig extends KalturaDropFolderFileHandlerConfig {
    leadPattern: string;
    additionalPatterns: string;
    constructor(data?: KalturaDropFolderTrRdsFileHandlerConfigArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
