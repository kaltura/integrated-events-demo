import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSshDropFolder, KalturaSshDropFolderArgs } from './KalturaSshDropFolder';
export interface KalturaScpDropFolderArgs extends KalturaSshDropFolderArgs {
}
export declare class KalturaScpDropFolder extends KalturaSshDropFolder {
    constructor(data?: KalturaScpDropFolderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
