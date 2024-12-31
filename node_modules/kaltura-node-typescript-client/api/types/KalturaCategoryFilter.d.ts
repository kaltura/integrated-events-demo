import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryBaseFilter, KalturaCategoryBaseFilterArgs } from './KalturaCategoryBaseFilter';
export interface KalturaCategoryFilterArgs extends KalturaCategoryBaseFilterArgs {
    freeText?: string;
    membersIn?: string;
    nameOrReferenceIdStartsWith?: string;
    managerEqual?: string;
    memberEqual?: string;
    fullNameStartsWithIn?: string;
    ancestorIdIn?: string;
    idOrInheritedParentIdIn?: string;
}
export declare class KalturaCategoryFilter extends KalturaCategoryBaseFilter {
    freeText: string;
    membersIn: string;
    nameOrReferenceIdStartsWith: string;
    managerEqual: string;
    memberEqual: string;
    fullNameStartsWithIn: string;
    ancestorIdIn: string;
    idOrInheritedParentIdIn: string;
    constructor(data?: KalturaCategoryFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
