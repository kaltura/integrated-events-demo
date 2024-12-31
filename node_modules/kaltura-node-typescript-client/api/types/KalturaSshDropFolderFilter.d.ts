import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSshDropFolderBaseFilter, KalturaSshDropFolderBaseFilterArgs } from './KalturaSshDropFolderBaseFilter';
export interface KalturaSshDropFolderFilterArgs extends KalturaSshDropFolderBaseFilterArgs {
}
export declare class KalturaSshDropFolderFilter extends KalturaSshDropFolderBaseFilter {
    constructor(data?: KalturaSshDropFolderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
