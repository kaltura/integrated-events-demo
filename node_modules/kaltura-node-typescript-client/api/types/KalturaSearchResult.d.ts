import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLicenseType } from './KalturaLicenseType';
import { KalturaSearch, KalturaSearchArgs } from './KalturaSearch';
export interface KalturaSearchResultArgs extends KalturaSearchArgs {
    id?: string;
    title?: string;
    thumbUrl?: string;
    description?: string;
    tags?: string;
    url?: string;
    sourceLink?: string;
    credit?: string;
    licenseType?: KalturaLicenseType;
    flashPlaybackType?: string;
    fileExt?: string;
}
export declare class KalturaSearchResult extends KalturaSearch {
    id: string;
    title: string;
    thumbUrl: string;
    description: string;
    tags: string;
    url: string;
    sourceLink: string;
    credit: string;
    licenseType: KalturaLicenseType;
    flashPlaybackType: string;
    fileExt: string;
    constructor(data?: KalturaSearchResultArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
