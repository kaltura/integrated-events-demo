import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUserBaseFilter, KalturaCategoryUserBaseFilterArgs } from './KalturaCategoryUserBaseFilter';
export interface KalturaCategoryUserFilterArgs extends KalturaCategoryUserBaseFilterArgs {
    categoryDirectMembers?: boolean;
    freeText?: string;
    relatedGroupsByUserId?: string;
}
export declare class KalturaCategoryUserFilter extends KalturaCategoryUserBaseFilter {
    categoryDirectMembers: boolean;
    freeText: string;
    relatedGroupsByUserId: string;
    constructor(data?: KalturaCategoryUserFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
