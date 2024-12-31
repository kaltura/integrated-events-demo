import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint, KalturaCuePointArgs } from './KalturaCuePoint';
export interface KalturaCodeCuePointArgs extends KalturaCuePointArgs {
    code?: string;
    description?: string;
    endTime?: number;
}
export declare class KalturaCodeCuePoint extends KalturaCuePoint {
    code: string;
    description: string;
    endTime: number;
    readonly duration: number;
    constructor(data?: KalturaCodeCuePointArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
