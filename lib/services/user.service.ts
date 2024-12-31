import { KalturaUser } from "kaltura-node-typescript-client/api/types/KalturaUser";
import { KalturaUserModel } from "../kaltura-integration/kaltura-user.model";
import { User, UserModel } from "../models/user.model";
import { xhrLogMessages } from "../xhrLogMessages";

export class userService {
    static async get(ctx: any) {
        const user = await new UserModel().get(ctx.request.query.id)
        if (user) {
            // the following will make sure the user exists in Kaltura, and if not - will create it.
            // This could happen if there's an already-logged-in user that was never created in Kaltura (registered before integration)
            // 
            // since this is not important to return any kaltura-related info in this call, 
            // we can do this async and not have this impact response time of this endpoint
            new KalturaUserModel(new KalturaUser(user)).getUserData();
        }
        ctx.status = 200;
        ctx.body = user;
    }

    static async add(ctx: any) {
        // start by creating the user locally
        const userModel = new UserModel();
        const user = new User();
        user.id = ctx.request.body.userId;
        user.firstName = ctx.request.body.firstname;
        user.lastName = ctx.request.body.lastname;
        user.email = ctx.request.body.email;
        user.company = ctx.request.body.company;
        const result = await userModel.addUser(user);

        console.log(user);
        // then make sure the user exists in Kaltura:
        const kalturaUser = new KalturaUser(user);

        // since no kaltura-related info in expected in the result of this call, we can do this async.
        new KalturaUserModel(kalturaUser).getUserData();

        const msg = result ? 'OK' : 'Failed to create user';
        ctx.status = (result ? 200 : 500)
        ctx.body = { result, msg };
    }
}
