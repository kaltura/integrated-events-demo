import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaAssetParamsBaseFilterArgs extends KalturaRelatedFilterArgs {
    idEqual?: number;
    idIn?: string;
    systemNameEqual?: string;
    systemNameIn?: string;
    isSystemDefaultEqual?: KalturaNullableBoolean;
    tagsEqual?: string;
}
export declare class KalturaAssetParamsBaseFilter extends KalturaRelatedFilter {
    idEqual: number;
    idIn: string;
    systemNameEqual: string;
    systemNameIn: string;
    isSystemDefaultEqual: KalturaNullableBoolean;
    tagsEqual: string;
    constructor(data?: KalturaAssetParamsBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
