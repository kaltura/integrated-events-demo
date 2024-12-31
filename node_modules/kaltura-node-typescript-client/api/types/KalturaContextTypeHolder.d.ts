import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaContextType } from './KalturaContextType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaContextTypeHolderArgs extends KalturaObjectBaseArgs {
    type?: KalturaContextType;
}
export declare class KalturaContextTypeHolder extends KalturaObjectBase {
    type: KalturaContextType;
    constructor(data?: KalturaContextTypeHolderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
