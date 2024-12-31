import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCuePoint, KalturaCuePointArgs } from './KalturaCuePoint';
export interface KalturaAnnotationArgs extends KalturaCuePointArgs {
    parentId?: string;
    text?: string;
    endTime?: number;
    isPublic?: KalturaNullableBoolean;
    searchableOnEntry?: KalturaNullableBoolean;
}
export declare class KalturaAnnotation extends KalturaCuePoint {
    parentId: string;
    text: string;
    endTime: number;
    readonly duration: number;
    readonly depth: number;
    readonly childrenCount: number;
    readonly directChildrenCount: number;
    isPublic: KalturaNullableBoolean;
    searchableOnEntry: KalturaNullableBoolean;
    constructor(data?: KalturaAnnotationArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
