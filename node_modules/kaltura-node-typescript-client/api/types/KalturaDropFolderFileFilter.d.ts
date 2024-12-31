import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFileBaseFilter, KalturaDropFolderFileBaseFilterArgs } from './KalturaDropFolderFileBaseFilter';
export interface KalturaDropFolderFileFilterArgs extends KalturaDropFolderFileBaseFilterArgs {
}
export declare class KalturaDropFolderFileFilter extends KalturaDropFolderFileBaseFilter {
    constructor(data?: KalturaDropFolderFileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
