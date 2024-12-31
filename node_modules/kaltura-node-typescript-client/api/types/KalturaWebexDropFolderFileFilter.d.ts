import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWebexDropFolderFileBaseFilter, KalturaWebexDropFolderFileBaseFilterArgs } from './KalturaWebexDropFolderFileBaseFilter';
export interface KalturaWebexDropFolderFileFilterArgs extends KalturaWebexDropFolderFileBaseFilterArgs {
}
export declare class KalturaWebexDropFolderFileFilter extends KalturaWebexDropFolderFileBaseFilter {
    constructor(data?: KalturaWebexDropFolderFileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
