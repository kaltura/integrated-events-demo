import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsOutput, KalturaFlavorParamsOutputArgs } from './KalturaFlavorParamsOutput';
export interface KalturaMediaFlavorParamsOutputArgs extends KalturaFlavorParamsOutputArgs {
}
export declare class KalturaMediaFlavorParamsOutput extends KalturaFlavorParamsOutput {
    constructor(data?: KalturaMediaFlavorParamsOutputArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
