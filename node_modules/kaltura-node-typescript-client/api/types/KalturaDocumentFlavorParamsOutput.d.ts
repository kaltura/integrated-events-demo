import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsOutput, KalturaFlavorParamsOutputArgs } from './KalturaFlavorParamsOutput';
export interface KalturaDocumentFlavorParamsOutputArgs extends KalturaFlavorParamsOutputArgs {
}
export declare class KalturaDocumentFlavorParamsOutput extends KalturaFlavorParamsOutput {
    constructor(data?: KalturaDocumentFlavorParamsOutputArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
