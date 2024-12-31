import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWebexDropFolderBaseFilter, KalturaWebexDropFolderBaseFilterArgs } from './KalturaWebexDropFolderBaseFilter';
export interface KalturaWebexDropFolderFilterArgs extends KalturaWebexDropFolderBaseFilterArgs {
}
export declare class KalturaWebexDropFolderFilter extends KalturaWebexDropFolderBaseFilter {
    constructor(data?: KalturaWebexDropFolderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
