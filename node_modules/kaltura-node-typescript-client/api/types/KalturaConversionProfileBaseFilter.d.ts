import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfileStatus } from './KalturaConversionProfileStatus';
import { KalturaConversionProfileType } from './KalturaConversionProfileType';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaConversionProfileBaseFilterArgs extends KalturaRelatedFilterArgs {
    idEqual?: number;
    idIn?: string;
    statusEqual?: KalturaConversionProfileStatus;
    statusIn?: string;
    typeEqual?: KalturaConversionProfileType;
    typeIn?: string;
    nameEqual?: string;
    systemNameEqual?: string;
    systemNameIn?: string;
    tagsMultiLikeOr?: string;
    tagsMultiLikeAnd?: string;
    defaultEntryIdEqual?: string;
    defaultEntryIdIn?: string;
}
export declare class KalturaConversionProfileBaseFilter extends KalturaRelatedFilter {
    idEqual: number;
    idIn: string;
    statusEqual: KalturaConversionProfileStatus;
    statusIn: string;
    typeEqual: KalturaConversionProfileType;
    typeIn: string;
    nameEqual: string;
    systemNameEqual: string;
    systemNameIn: string;
    tagsMultiLikeOr: string;
    tagsMultiLikeAnd: string;
    defaultEntryIdEqual: string;
    defaultEntryIdIn: string;
    constructor(data?: KalturaConversionProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
