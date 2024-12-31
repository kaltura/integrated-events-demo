import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUserStatus } from './KalturaCategoryUserStatus';
import { KalturaUpdateMethodType } from './KalturaUpdateMethodType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaCategoryUserProviderFilterArgs extends KalturaFilterArgs {
    userIdEqual?: string;
    userIdIn?: string;
    statusEqual?: KalturaCategoryUserStatus;
    statusIn?: string;
    createdAtGreaterThanOrEqual?: number;
    createdAtLessThanOrEqual?: number;
    updatedAtGreaterThanOrEqual?: number;
    updatedAtLessThanOrEqual?: number;
    updateMethodEqual?: KalturaUpdateMethodType;
    updateMethodIn?: string;
    permissionNamesMatchAnd?: string;
    permissionNamesMatchOr?: string;
}
export declare class KalturaCategoryUserProviderFilter extends KalturaFilter {
    userIdEqual: string;
    userIdIn: string;
    statusEqual: KalturaCategoryUserStatus;
    statusIn: string;
    createdAtGreaterThanOrEqual: number;
    createdAtLessThanOrEqual: number;
    updatedAtGreaterThanOrEqual: number;
    updatedAtLessThanOrEqual: number;
    updateMethodEqual: KalturaUpdateMethodType;
    updateMethodIn: string;
    permissionNamesMatchAnd: string;
    permissionNamesMatchOr: string;
    constructor(data?: KalturaCategoryUserProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
