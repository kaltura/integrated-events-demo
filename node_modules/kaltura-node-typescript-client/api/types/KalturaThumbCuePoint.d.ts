import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbCuePointSubType } from './KalturaThumbCuePointSubType';
import { KalturaCuePoint, KalturaCuePointArgs } from './KalturaCuePoint';
export interface KalturaThumbCuePointArgs extends KalturaCuePointArgs {
    assetId?: string;
    description?: string;
    title?: string;
    subType?: KalturaThumbCuePointSubType;
}
export declare class KalturaThumbCuePoint extends KalturaCuePoint {
    assetId: string;
    description: string;
    title: string;
    subType: KalturaThumbCuePointSubType;
    constructor(data?: KalturaThumbCuePointArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
