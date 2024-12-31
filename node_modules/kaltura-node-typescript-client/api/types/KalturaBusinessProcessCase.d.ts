import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaBusinessProcessCaseArgs extends KalturaObjectBaseArgs {
    id?: string;
    businessProcessId?: string;
    businessProcessStartNotificationTemplateId?: number;
    suspended?: boolean;
    activityId?: string;
}
export declare class KalturaBusinessProcessCase extends KalturaObjectBase {
    id: string;
    businessProcessId: string;
    businessProcessStartNotificationTemplateId: number;
    suspended: boolean;
    activityId: string;
    constructor(data?: KalturaBusinessProcessCaseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
