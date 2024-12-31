import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConfObjType } from './KalturaUiConfObjType';
import { KalturaString } from './KalturaString';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaUiConfTypeInfoArgs extends KalturaObjectBaseArgs {
    type?: KalturaUiConfObjType;
    versions?: KalturaString[];
    directory?: string;
    filename?: string;
}
export declare class KalturaUiConfTypeInfo extends KalturaObjectBase {
    type: KalturaUiConfObjType;
    versions: KalturaString[];
    directory: string;
    filename: string;
    constructor(data?: KalturaUiConfTypeInfoArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
