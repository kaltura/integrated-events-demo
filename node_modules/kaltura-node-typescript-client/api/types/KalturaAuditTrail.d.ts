import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuditTrailStatus } from './KalturaAuditTrailStatus';
import { KalturaAuditTrailObjectType } from './KalturaAuditTrailObjectType';
import { KalturaAuditTrailAction } from './KalturaAuditTrailAction';
import { KalturaAuditTrailInfo } from './KalturaAuditTrailInfo';
import { KalturaAuditTrailContext } from './KalturaAuditTrailContext';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaAuditTrailArgs extends KalturaObjectBaseArgs {
    auditObjectType?: KalturaAuditTrailObjectType;
    objectId?: string;
    relatedObjectId?: string;
    relatedObjectType?: KalturaAuditTrailObjectType;
    entryId?: string;
    userId?: string;
    action?: KalturaAuditTrailAction;
    data?: KalturaAuditTrailInfo;
    clientTag?: string;
    description?: string;
}
export declare class KalturaAuditTrail extends KalturaObjectBase {
    readonly id: number;
    readonly createdAt: Date;
    readonly parsedAt: number;
    readonly status: KalturaAuditTrailStatus;
    auditObjectType: KalturaAuditTrailObjectType;
    objectId: string;
    relatedObjectId: string;
    relatedObjectType: KalturaAuditTrailObjectType;
    entryId: string;
    readonly masterPartnerId: number;
    readonly partnerId: number;
    readonly requestId: string;
    userId: string;
    action: KalturaAuditTrailAction;
    data: KalturaAuditTrailInfo;
    readonly ks: string;
    readonly context: KalturaAuditTrailContext;
    readonly entryPoint: string;
    readonly serverName: string;
    readonly ipAddress: string;
    readonly userAgent: string;
    clientTag: string;
    description: string;
    readonly errorDescription: string;
    constructor(data?: KalturaAuditTrailArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
