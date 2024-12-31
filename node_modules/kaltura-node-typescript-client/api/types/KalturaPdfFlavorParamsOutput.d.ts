import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsOutput, KalturaFlavorParamsOutputArgs } from './KalturaFlavorParamsOutput';
export interface KalturaPdfFlavorParamsOutputArgs extends KalturaFlavorParamsOutputArgs {
    readonly?: boolean;
}
export declare class KalturaPdfFlavorParamsOutput extends KalturaFlavorParamsOutput {
    readonly: boolean;
    constructor(data?: KalturaPdfFlavorParamsOutputArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
