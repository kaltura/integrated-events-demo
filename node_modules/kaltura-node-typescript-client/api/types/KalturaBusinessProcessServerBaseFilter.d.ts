import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessProcessServerStatus } from './KalturaBusinessProcessServerStatus';
import { KalturaBusinessProcessProvider } from './KalturaBusinessProcessProvider';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaBusinessProcessServerBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: number;
    idIn?: string;
    idNotIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    partnerIdEqual?: number;
    partnerIdIn?: string;
    statusEqual?: KalturaBusinessProcessServerStatus;
    statusNotEqual?: KalturaBusinessProcessServerStatus;
    statusIn?: string;
    statusNotIn?: string;
    typeEqual?: KalturaBusinessProcessProvider;
    typeIn?: string;
    dcEqual?: number;
    dcEqOrNull?: number;
}
export declare class KalturaBusinessProcessServerBaseFilter extends KalturaFilter {
    idEqual: number;
    idIn: string;
    idNotIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    partnerIdEqual: number;
    partnerIdIn: string;
    statusEqual: KalturaBusinessProcessServerStatus;
    statusNotEqual: KalturaBusinessProcessServerStatus;
    statusIn: string;
    statusNotIn: string;
    typeEqual: KalturaBusinessProcessProvider;
    typeIn: string;
    dcEqual: number;
    dcEqOrNull: number;
    constructor(data?: KalturaBusinessProcessServerBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
