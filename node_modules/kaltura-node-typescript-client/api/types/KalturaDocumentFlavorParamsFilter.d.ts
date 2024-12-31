import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentFlavorParamsBaseFilter, KalturaDocumentFlavorParamsBaseFilterArgs } from './KalturaDocumentFlavorParamsBaseFilter';
export interface KalturaDocumentFlavorParamsFilterArgs extends KalturaDocumentFlavorParamsBaseFilterArgs {
}
export declare class KalturaDocumentFlavorParamsFilter extends KalturaDocumentFlavorParamsBaseFilter {
    constructor(data?: KalturaDocumentFlavorParamsFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
