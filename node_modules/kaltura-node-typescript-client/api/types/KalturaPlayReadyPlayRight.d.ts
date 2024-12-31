import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyAnalogVideoOPL } from './KalturaPlayReadyAnalogVideoOPL';
import { KalturaPlayReadyAnalogVideoOPIdHolder } from './KalturaPlayReadyAnalogVideoOPIdHolder';
import { KalturaPlayReadyDigitalAudioOPL } from './KalturaPlayReadyDigitalAudioOPL';
import { KalturaPlayReadyCompressedDigitalVideoOPL } from './KalturaPlayReadyCompressedDigitalVideoOPL';
import { KalturaPlayReadyDigitalAudioOPIdHolder } from './KalturaPlayReadyDigitalAudioOPIdHolder';
import { KalturaPlayReadyUncompressedDigitalVideoOPL } from './KalturaPlayReadyUncompressedDigitalVideoOPL';
import { KalturaPlayReadyPlayEnablerHolder } from './KalturaPlayReadyPlayEnablerHolder';
import { KalturaPlayReadyRight, KalturaPlayReadyRightArgs } from './KalturaPlayReadyRight';
export interface KalturaPlayReadyPlayRightArgs extends KalturaPlayReadyRightArgs {
    analogVideoOPL?: KalturaPlayReadyAnalogVideoOPL;
    analogVideoOutputProtectionList?: KalturaPlayReadyAnalogVideoOPIdHolder[];
    compressedDigitalAudioOPL?: KalturaPlayReadyDigitalAudioOPL;
    compressedDigitalVideoOPL?: KalturaPlayReadyCompressedDigitalVideoOPL;
    digitalAudioOutputProtectionList?: KalturaPlayReadyDigitalAudioOPIdHolder[];
    uncompressedDigitalAudioOPL?: KalturaPlayReadyDigitalAudioOPL;
    uncompressedDigitalVideoOPL?: KalturaPlayReadyUncompressedDigitalVideoOPL;
    firstPlayExpiration?: number;
    playEnablers?: KalturaPlayReadyPlayEnablerHolder[];
}
export declare class KalturaPlayReadyPlayRight extends KalturaPlayReadyRight {
    analogVideoOPL: KalturaPlayReadyAnalogVideoOPL;
    analogVideoOutputProtectionList: KalturaPlayReadyAnalogVideoOPIdHolder[];
    compressedDigitalAudioOPL: KalturaPlayReadyDigitalAudioOPL;
    compressedDigitalVideoOPL: KalturaPlayReadyCompressedDigitalVideoOPL;
    digitalAudioOutputProtectionList: KalturaPlayReadyDigitalAudioOPIdHolder[];
    uncompressedDigitalAudioOPL: KalturaPlayReadyDigitalAudioOPL;
    uncompressedDigitalVideoOPL: KalturaPlayReadyUncompressedDigitalVideoOPL;
    firstPlayExpiration: number;
    playEnablers: KalturaPlayReadyPlayEnablerHolder[];
    constructor(data?: KalturaPlayReadyPlayRightArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
