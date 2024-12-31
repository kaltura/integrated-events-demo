import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFileHandlerType } from './KalturaDropFolderFileHandlerType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaDropFolderFileHandlerConfigArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaDropFolderFileHandlerConfig extends KalturaObjectBase {
    readonly handlerType: KalturaDropFolderFileHandlerType;
    constructor(data?: KalturaDropFolderFileHandlerConfigArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
