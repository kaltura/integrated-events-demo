import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyDigitalAudioOPId } from './KalturaPlayReadyDigitalAudioOPId';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPlayReadyDigitalAudioOPIdHolderArgs extends KalturaObjectBaseArgs {
    type?: KalturaPlayReadyDigitalAudioOPId;
}
export declare class KalturaPlayReadyDigitalAudioOPIdHolder extends KalturaObjectBase {
    type: KalturaPlayReadyDigitalAudioOPId;
    constructor(data?: KalturaPlayReadyDigitalAudioOPIdHolderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
