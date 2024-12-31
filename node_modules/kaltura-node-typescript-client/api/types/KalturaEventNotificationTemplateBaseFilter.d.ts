import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateType } from './KalturaEventNotificationTemplateType';
import { KalturaEventNotificationTemplateStatus } from './KalturaEventNotificationTemplateStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaEventNotificationTemplateBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: number;
    idIn?: string;
    partnerIdEqual?: number;
    partnerIdIn?: string;
    systemNameEqual?: string;
    systemNameIn?: string;
    typeEqual?: KalturaEventNotificationTemplateType;
    typeIn?: string;
    statusEqual?: KalturaEventNotificationTemplateStatus;
    statusIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
}
export declare class KalturaEventNotificationTemplateBaseFilter extends KalturaFilter {
    idEqual: number;
    idIn: string;
    partnerIdEqual: number;
    partnerIdIn: string;
    systemNameEqual: string;
    systemNameIn: string;
    typeEqual: KalturaEventNotificationTemplateType;
    typeIn: string;
    statusEqual: KalturaEventNotificationTemplateStatus;
    statusIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    constructor(data?: KalturaEventNotificationTemplateBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
