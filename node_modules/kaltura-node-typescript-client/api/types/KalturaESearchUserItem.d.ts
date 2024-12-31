import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchUserFieldName } from './KalturaESearchUserFieldName';
import { KalturaESearchAbstractUserItem, KalturaESearchAbstractUserItemArgs } from './KalturaESearchAbstractUserItem';
export interface KalturaESearchUserItemArgs extends KalturaESearchAbstractUserItemArgs {
    fieldName?: KalturaESearchUserFieldName;
}
export declare class KalturaESearchUserItem extends KalturaESearchAbstractUserItem {
    fieldName: KalturaESearchUserFieldName;
    constructor(data?: KalturaESearchUserItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
