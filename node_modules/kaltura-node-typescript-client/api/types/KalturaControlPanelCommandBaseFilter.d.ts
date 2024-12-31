import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaControlPanelCommandType } from './KalturaControlPanelCommandType';
import { KalturaControlPanelCommandTargetType } from './KalturaControlPanelCommandTargetType';
import { KalturaControlPanelCommandStatus } from './KalturaControlPanelCommandStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaControlPanelCommandBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: number;
    idIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    createdByIdEqual?: number;
    typeEqual?: KalturaControlPanelCommandType;
    typeIn?: string;
    targetTypeEqual?: KalturaControlPanelCommandTargetType;
    targetTypeIn?: string;
    statusEqual?: KalturaControlPanelCommandStatus;
    statusIn?: string;
}
export declare class KalturaControlPanelCommandBaseFilter extends KalturaFilter {
    idEqual: number;
    idIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    createdByIdEqual: number;
    typeEqual: KalturaControlPanelCommandType;
    typeIn: string;
    targetTypeEqual: KalturaControlPanelCommandTargetType;
    targetTypeIn: string;
    statusEqual: KalturaControlPanelCommandStatus;
    statusIn: string;
    constructor(data?: KalturaControlPanelCommandBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
