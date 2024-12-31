import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFilter, KalturaDropFolderFilterArgs } from './KalturaDropFolderFilter';
export interface KalturaWebexDropFolderBaseFilterArgs extends KalturaDropFolderFilterArgs {
}
export declare class KalturaWebexDropFolderBaseFilter extends KalturaDropFolderFilter {
    constructor(data?: KalturaWebexDropFolderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
