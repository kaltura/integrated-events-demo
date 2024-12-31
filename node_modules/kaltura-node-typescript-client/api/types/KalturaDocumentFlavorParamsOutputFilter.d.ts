import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentFlavorParamsOutputBaseFilter, KalturaDocumentFlavorParamsOutputBaseFilterArgs } from './KalturaDocumentFlavorParamsOutputBaseFilter';
export interface KalturaDocumentFlavorParamsOutputFilterArgs extends KalturaDocumentFlavorParamsOutputBaseFilterArgs {
}
export declare class KalturaDocumentFlavorParamsOutputFilter extends KalturaDocumentFlavorParamsOutputBaseFilter {
    constructor(data?: KalturaDocumentFlavorParamsOutputFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
