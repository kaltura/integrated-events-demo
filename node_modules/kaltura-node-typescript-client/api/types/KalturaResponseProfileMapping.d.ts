import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaResponseProfileMappingArgs extends KalturaObjectBaseArgs {
    parentProperty?: string;
    filterProperty?: string;
    allowNull?: boolean;
}
export declare class KalturaResponseProfileMapping extends KalturaObjectBase {
    parentProperty: string;
    filterProperty: string;
    allowNull: boolean;
    constructor(data?: KalturaResponseProfileMappingArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
