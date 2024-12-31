import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchLanguage } from './KalturaESearchLanguage';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaESearchLanguageItemArgs extends KalturaObjectBaseArgs {
    eSerachLanguage?: KalturaESearchLanguage;
}
export declare class KalturaESearchLanguageItem extends KalturaObjectBase {
    eSerachLanguage: KalturaESearchLanguage;
    constructor(data?: KalturaESearchLanguageItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
