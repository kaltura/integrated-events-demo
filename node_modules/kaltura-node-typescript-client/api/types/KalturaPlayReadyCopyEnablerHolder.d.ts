import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyCopyEnablerType } from './KalturaPlayReadyCopyEnablerType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPlayReadyCopyEnablerHolderArgs extends KalturaObjectBaseArgs {
    type?: KalturaPlayReadyCopyEnablerType;
}
export declare class KalturaPlayReadyCopyEnablerHolder extends KalturaObjectBase {
    type: KalturaPlayReadyCopyEnablerType;
    constructor(data?: KalturaPlayReadyCopyEnablerHolderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
