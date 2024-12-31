import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaApiExceptionArgArgs extends KalturaObjectBaseArgs {
    name?: string;
    value?: string;
}
export declare class KalturaApiExceptionArg extends KalturaObjectBase {
    name: string;
    value: string;
    constructor(data?: KalturaApiExceptionArgArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
