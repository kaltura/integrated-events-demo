import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';
export interface KalturaCategoryUserAdvancedFilterArgs extends KalturaSearchItemArgs {
    memberIdEq?: string;
    memberIdIn?: string;
    memberPermissionsMatchOr?: string;
    memberPermissionsMatchAnd?: string;
}
export declare class KalturaCategoryUserAdvancedFilter extends KalturaSearchItem {
    memberIdEq: string;
    memberIdIn: string;
    memberPermissionsMatchOr: string;
    memberPermissionsMatchAnd: string;
    constructor(data?: KalturaCategoryUserAdvancedFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
