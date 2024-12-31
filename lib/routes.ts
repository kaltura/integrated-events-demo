import Router from "@koa/router";
import { userService } from "./services/user.service";
import { KalturaService } from "./services/kaltura.service";

const router = new Router({ prefix: "/api" });

/**
 * get an application user
 * query params:
 *   id
 */
router.get("/user", userService.get);

/**
 * register a new application user
 * request POST params:
 *   id
 *   firstName
 *   lastName
 *   email
 *   company
 */
router.post("/user", userService.add);

/**
 * for a given user and entry in event, get ks+jwt+entry+room launch
 * query params:
 *   userId
 *   entryId
 *   eventId
 *   setAsModerator
 */
router.post("/kaltura/get-tokens", KalturaService.getUserData);

/**
 * This route is used to retrieve library data required for Player and CnC Libraries
 */
router.get("/kaltura/get-lib-data", KalturaService.getLibs);

/**
 * Add a new virtual event
 * request POST params:
 *   name
 *   description
 */
router.post("/kaltura/add-virtual-event", KalturaService.addVirtualEvent);

/**
 * List all events per PID
 */
router.get("/kaltura/list-virtual-event", KalturaService.listEvents);

/**
 * List all virtual sessions for a given event
 * query params:
 *   eventId
 */
router.post("/kaltura/list-virtual-sessions", KalturaService.getSessions);
router.post("/kaltura/session-detail", KalturaService.getSessionDetails);
router.post("/kaltura/add-live", KalturaService.addLiveSession);
router.post("/kaltura/add-room", KalturaService.addRoomSession);




export default router;
