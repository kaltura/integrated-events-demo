import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScpDropFolderBaseFilter, KalturaScpDropFolderBaseFilterArgs } from './KalturaScpDropFolderBaseFilter';
export interface KalturaScpDropFolderFilterArgs extends KalturaScpDropFolderBaseFilterArgs {
}
export declare class KalturaScpDropFolderFilter extends KalturaScpDropFolderBaseFilter {
    constructor(data?: KalturaScpDropFolderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
