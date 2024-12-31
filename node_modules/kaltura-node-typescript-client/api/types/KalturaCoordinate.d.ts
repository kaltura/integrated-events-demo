import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaCoordinateArgs extends KalturaObjectBaseArgs {
    latitude?: number;
    longitude?: number;
    name?: string;
}
export declare class KalturaCoordinate extends KalturaObjectBase {
    latitude: number;
    longitude: number;
    name: string;
    constructor(data?: KalturaCoordinateArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
