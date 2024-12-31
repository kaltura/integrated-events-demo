# Best Practices Implementing Event With Kaltura Components

:heavy_exclamation_mark: **Note:** The best practices mentioned are currently not yet reflected by the code of the sample application in this repository.
The application does everything mentioned in one single action when you click "init" because it does not really include different pages that would stand for a "login" of a user or "CMS page where entry is created".


## Components and Dependencies

### _General_

* virtual event
    * To gain all capabilities that Kaltura has to offer around events, a virtual event object needs to be created.
    The ID of that virtual event object is then passed to all components, so that all actions and interactions made by users are scoped under that event context.
    You can use developer.kaltura.com API console to create that object.

* user
    * a user in Kaltura must exist in order to be able to load CnC

### _Player or KME_

* Entry ID
    * To be able to render a player or launch a KME room, a respective entry should be created in Kaltura.
    Please refer to (...TBD...)

### _CnC_

* CnC app token
    * to be able to create a valid JWT for the CnC widget, an app token should be created in Kaltura, having its privileges set to "cncAuth:true".
    The "token" value from the appToken object is then used as a JWT signing secret.

* moderation group
    * This is not a mandatory dependency. It is only a dependency if you decide to use Kaltura groups to manage who is a moderator.
    * In case you are using Kaltura groups to managing moderators, you need to ensure that the moderators group for the respective entry exists (name would be {entryId}_moderators).

## Performance Best Practices

To have your application as optimized as possible, it is a good idea to use cache in your application for the different objects that need to be fetched from the Kaltura API.
That said, different objects can have different cache TTL, some are global for everyone all the time, some are per-user, some might be per event etc.

### <ins>General Comments</ins>
For each of the mentioned objects below, when storing them to cache, it is important to remember:

1. Cache TTL depends on the possibility of objects changing outside the scope of your application, causing your cached information to be out of date.
Assuming you do not have any process outside your application that might cause the cache to be out of date, the cache TTL could be as long as you wish and could even be implemented as persistent data (flags/configs) in your application database.
2. As with any cache implementation - the code should include a fallback to verifying the relevent object exists by making the necessary API calls in case the cache has expired/reset.

### <ins>CnC appToken</ins>
As specified above, to create a JWT for CnC you will need a token string that is used as the signing secret. This should be done once by calling `appToken.add` and this is during initial account setup (i.e. outside the scope of integration development).

To obtain this appToken you need to call `appToken.list`, and filter the result to the one token that has the cncAuth:true privilege.

**When to do it?**

There are 2 ways to optimize performance around that:
1. store the token string in an environment variable in your application, and skip any lookup in runtime.
2. make the `appToken.list` call as early as possible in the application (server start for example).

**Cache:**
If you decide to fetch the token programmatically (i.e. option #2 above) - store the token string in cache to avoid having to use the Kaltura API to find it over and over.
Remember to take the general comments, mentioned above, into consideration.

### <ins>Moderators Group</ins>
This part is relevant only if you choose to use Kaltura groups for managing moderators (for which you will need to create the group for each entry).

**When to do it?**

Ideally, creation of the moderator group should be done as early as when the entry gets created.
This means the performance impact is during the content creation phase rather than every user's access to the entry page itself.
Alternatively, it can be done when the first moderator is assigned (in other words - as long as there are no moderators - the group is not needed).

**Cache:**

Because the group ID is naming-convention-based, you don't need to fetch the group object to use it in different steps (like when adding a user to the group), therefore, it is possible to just cache, with _long TTL_, a boolean "true" value indicating the group already exists in Kaltura.

### <ins>User</ins>
You will need to make sure the user accessing your application exists in Kaltura.
This means making a call to `user.get` to check if the user exists and if that call returns an error - it means the user does not exist and needs to be created using `user.add` call.

**When to do it?**

The ideal phase to verify the user exists in Kaltura is whenever the user is accessing your application for the first time as an authenticated user.
This could be during registration, or during login.
Eventually, you will need to be able to do that verification in every page as a backup, in case the user is an existing user that will never go through registration again and might have an active session so will not go through login any time soon.

**Cache:**

As with group - you can just cache a boolean indicating the user was created in Kaltura.
If that cache item does not exist or expired, you will want to run through the verification flow immediately and populate this cache for better performance on the next pages the user might visit.


### <ins>User's Group</ins>
This part is relevant only if you choose to use Kaltura groups for managing moderators (where you will need to call `groupUser.list` and `groupUser.add` to make sure the user is moderator when needed).

**When to do it?**

If your application decided that a user needs to be a moderator of a specific entry, the ideal phase to perform this initial verification is when this user becomes a designated moderator, for example - when content manager decides to add user X as moderator on entry Y.

At that point, call `groupUser.list` to see if the user is already in the group and follow with `groupUser.add` to add the user if necessary.
That would be a good time to _cache_ the fact that the user is in the relevant group.

**Cache:**

As stated above - once user has been added to an entry's moderators group, you should cache a boolean "true" indicating that.


### <ins>Entry</ins>
Depending on your integration, entry might be created within your application or elsewhere using Kaltura's products.

**Cache:**

Upon first access to an entry _by any user_, get the entry from the Kaltura API using `baseEntry.get` or one of its inherited actions (e.g. `livestream.get`) and cache the entry object locally.

    Cache TTL in this case should be decided based on your practices when it comes to content management:
    1. Are you updating entries outside your application?
    2. If so in what frequency might that happen?
    3. Could it be that entry will be deleted from outside the scope of your application?


### KS and JWT generation
For best performance, it is recommended to generate KS locally using your admin secret.
Depending on the client library you are using, a local function (usually called generateSessionV2, or similar) should exist and allow you to generate a KS without havaing to call session.start.

The process of creating a JWT is anyway using a local function, however refer to the above regarding obtaining the appToken used for signing the JWT - you do not want your application to have to call `appToken.list` on every page load so use cache or environment variable to avoid these calls.

KS and JWT expiration should be decided per use-case and the expected content.
For example:
* For a 1hr long VOD - a KS with expiration of just a bit over 1hr could suffice, but worth considering the user might pause playback and the actual playback session could be longer.
* for a live session - KS can have expiration that is ~10minutes longer than the expected live duration could suffice, but if the session gets extended or doesn't start on time - you might want to use a longer expiration.
* for CnC JWT, the expiration depends on whether your application is SPA, or every page load will also reload the CnC widget (using newly generated JWT).
