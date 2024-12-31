import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSshDropFolderFilter, KalturaSshDropFolderFilterArgs } from './KalturaSshDropFolderFilter';
export interface KalturaScpDropFolderBaseFilterArgs extends KalturaSshDropFolderFilterArgs {
}
export declare class KalturaScpDropFolderBaseFilter extends KalturaSshDropFolderFilter {
    constructor(data?: KalturaScpDropFolderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
