import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchProviderType } from './KalturaSearchProviderType';
import { KalturaMediaType } from './KalturaMediaType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaSearchArgs extends KalturaObjectBaseArgs {
    keyWords?: string;
    searchSource?: KalturaSearchProviderType;
    mediaType?: KalturaMediaType;
    extraData?: string;
    authData?: string;
}
export declare class KalturaSearch extends KalturaObjectBase {
    keyWords: string;
    searchSource: KalturaSearchProviderType;
    mediaType: KalturaMediaType;
    extraData: string;
    authData: string;
    constructor(data?: KalturaSearchArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
