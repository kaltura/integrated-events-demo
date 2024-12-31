import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryModerationStatus } from './KalturaEntryModerationStatus';
import { KalturaEmailIngestionProfileStatus } from './KalturaEmailIngestionProfileStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaEmailIngestionProfileArgs extends KalturaObjectBaseArgs {
    name?: string;
    description?: string;
    emailAddress?: string;
    mailboxId?: string;
    conversionProfile2Id?: number;
    moderationStatus?: KalturaEntryModerationStatus;
    defaultCategory?: string;
    defaultUserId?: string;
    defaultTags?: string;
    defaultAdminTags?: string;
    maxAttachmentSizeKbytes?: number;
    maxAttachmentsPerMail?: number;
}
export declare class KalturaEmailIngestionProfile extends KalturaObjectBase {
    readonly id: number;
    name: string;
    description: string;
    emailAddress: string;
    mailboxId: string;
    readonly partnerId: number;
    conversionProfile2Id: number;
    moderationStatus: KalturaEntryModerationStatus;
    readonly status: KalturaEmailIngestionProfileStatus;
    readonly createdAt: string;
    defaultCategory: string;
    defaultUserId: string;
    defaultTags: string;
    defaultAdminTags: string;
    maxAttachmentSizeKbytes: number;
    maxAttachmentsPerMail: number;
    constructor(data?: KalturaEmailIngestionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
