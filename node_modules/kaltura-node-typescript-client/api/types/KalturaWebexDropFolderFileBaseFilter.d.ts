import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFileFilter, KalturaDropFolderFileFilterArgs } from './KalturaDropFolderFileFilter';
export interface KalturaWebexDropFolderFileBaseFilterArgs extends KalturaDropFolderFileFilterArgs {
}
export declare class KalturaWebexDropFolderFileBaseFilter extends KalturaDropFolderFileFilter {
    constructor(data?: KalturaWebexDropFolderFileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
