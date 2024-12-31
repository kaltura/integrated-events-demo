import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyPlayEnablerType } from './KalturaPlayReadyPlayEnablerType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPlayReadyPlayEnablerHolderArgs extends KalturaObjectBaseArgs {
    type?: KalturaPlayReadyPlayEnablerType;
}
export declare class KalturaPlayReadyPlayEnablerHolder extends KalturaObjectBase {
    type: KalturaPlayReadyPlayEnablerType;
    constructor(data?: KalturaPlayReadyPlayEnablerHolderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
