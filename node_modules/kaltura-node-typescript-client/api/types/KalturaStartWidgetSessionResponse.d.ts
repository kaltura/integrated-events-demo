import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaStartWidgetSessionResponseArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaStartWidgetSessionResponse extends KalturaObjectBase {
    readonly partnerId: number;
    readonly ks: string;
    readonly userId: string;
    constructor(data?: KalturaStartWidgetSessionResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
