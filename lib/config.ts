import * as dotenv from "dotenv";
dotenv.config();
import convict from "convict";

const config = convict({
  kalturaUrl: {
    doc: "Kaltura URL",
    format: String,
    default: "https://www.kaltura.com",
    env: "KALTURA_URL", // service url
  },
  kmeKey: {
    doc: "KME Key ",
    format: String,
    default: "null",
    env: "KALTURA_KME_KEY", //KME key - to be provided by Kaltura admin (via NAP)
  },
  kmeSecret: {
    doc: "KME Secret ID ",
    format: String,
    default: "null",
    env: "KALTURA_KME_SECRET", // KME secret - to be provided by Kaltura admin (via NAP)
  },
  kmeLaunchUrl: {
    doc: "KME Launch URL ",
    format: String,
    default: "null",
    env: "KALTURA_KME_URL", // set admin user id by env var
  },
  kmeRole: {
    doc: "KME ROle ",
    format: String,
    default: "null",
    env: "KALTURA_KME_ROLE", // set admin user id by env var
  },
  reactionUiConfid: {
    doc: "Kaltura Reaction UIconf",
    format: String,
    default: "null",
    env: "KALTURA_REACTION_UICONFID", // set kaltura event id by env var
  },
  cncPlayerID: {
    doc: "cnc Uiconf ID ",
    format: String,
    default: "null",
    env: "KALTURA_CNC_UICONFID", // set admin user id by env var
  },
  metadataProfileFieldId: {
    doc: "metadataProfileFieldId ",
    format: String,
    default: "null",
    env: "METEDATA_PROFILE_FIELD_ID", //
  },
  roomTemplateId: {
    doc: "roomTemplateId ",
    format: String,
    default: "null",
    env: "ROOM_TEMPLATE_ID", // 
  },
  metadataProfileId: {
    doc: "metadataProfileId ",
    format: String,
    default: "null",
    env: "METEDATA_PROFILE_ID", // 
  },
  metadataFieldName: {
    doc: "metadataFieldName ",
    format: String,
    default: "null",
    env: "METEDATA_FIELD_NAME", // 
  },
  uiConfid: {
    doc: "Uiconf ID ",
    format: String,
    default: "null",
    env: "KALTURA_UICONFID", // set admin user id by env var
  },
  useGroupsForModerators: {
    doc: "Whether to use Kaltura groups for moderators management or not ",
    format: Boolean,
    default: "null",
    env: "KALTURA_USE_GROUP_FOR_MODERATORS", // set admin user id by env var
  },
  partner: {
    id: {
      doc: "Partner id",
      format: String,
      default: "null",
      env: "KALTURA_PARTNER_ID", // set partner id by env var
    },
    adminSecret: {
      doc: "Admin secret",
      format: String,
      sensitive: true,
      default: null,
      env: "KALTURA_ADMIN_SECRET", // set admin secret by env var
    },
    adminUserId: {
      doc: "Admin user id",
      format: String,
      default: null,
      env: "KALTURA_ADMIN_USER_ID", // set admin user id by env var
    },
  },
});

config.validate({ allowed: "strict" });
export default config;
