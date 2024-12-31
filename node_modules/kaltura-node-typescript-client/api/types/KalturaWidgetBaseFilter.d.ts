import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaWidgetBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: string;
    idIn?: string;
    sourceWidgetIdEqual?: string;
    rootWidgetIdEqual?: string;
    partnerIdEqual?: number;
    entryIdEqual?: string;
    uiConfIdEqual?: number;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    partnerDataLike?: string;
}
export declare class KalturaWidgetBaseFilter extends KalturaFilter {
    idEqual: string;
    idIn: string;
    sourceWidgetIdEqual: string;
    rootWidgetIdEqual: string;
    partnerIdEqual: number;
    entryIdEqual: string;
    uiConfIdEqual: number;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    partnerDataLike: string;
    constructor(data?: KalturaWidgetBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
