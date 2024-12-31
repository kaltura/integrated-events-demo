import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyAnalogVideoOPId } from './KalturaPlayReadyAnalogVideoOPId';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPlayReadyAnalogVideoOPIdHolderArgs extends KalturaObjectBaseArgs {
    type?: KalturaPlayReadyAnalogVideoOPId;
}
export declare class KalturaPlayReadyAnalogVideoOPIdHolder extends KalturaObjectBase {
    type: KalturaPlayReadyAnalogVideoOPId;
    constructor(data?: KalturaPlayReadyAnalogVideoOPIdHolderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
