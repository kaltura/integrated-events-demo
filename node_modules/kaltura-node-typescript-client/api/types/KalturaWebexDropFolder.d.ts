import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolder, KalturaDropFolderArgs } from './KalturaDropFolder';
export interface KalturaWebexDropFolderArgs extends KalturaDropFolderArgs {
    webexUserId?: string;
    webexPassword?: string;
    webexSiteId?: number;
    webexPartnerId?: string;
    webexServiceUrl?: string;
    webexHostIdMetadataFieldName?: string;
    deleteFromRecycleBin?: boolean;
    webexServiceType?: string;
    webexSiteName?: string;
    deleteFromTimestamp?: Date;
}
export declare class KalturaWebexDropFolder extends KalturaDropFolder {
    webexUserId: string;
    webexPassword: string;
    webexSiteId: number;
    webexPartnerId: string;
    webexServiceUrl: string;
    webexHostIdMetadataFieldName: string;
    deleteFromRecycleBin: boolean;
    webexServiceType: string;
    webexSiteName: string;
    deleteFromTimestamp: Date;
    constructor(data?: KalturaWebexDropFolderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
