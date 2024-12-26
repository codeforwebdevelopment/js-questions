

// You are building a social media product with users and followers. Consider the following code:
class User {
/**
* @param {string} username
*@param {Array.<string>} tags
*/
constructor (username, tags) {
    this.username = username;
this.tags = tags;
this.followers = [];
}

/**
* @param {User} user
* @returns void */
addFollower (user) {
this.followers. push(user);
}

/**
* Get the followers who are tagged with `tag`
* @param {string} tag
*
@returns {Array.<User>} */
getFollowers (tag) {
}
// Fill in this line
// Fill in the missing line. Select ALL that are correct.
// Select all that apply:
// return this.followers.filter(
// (follower) => follower.tags.includes (tag));

// return this.followers.includes(
// (follower) => follower.tags.filter(tag));

// return this.followers.filter(
// (follower) =>
// follower.tags.filter(
// (followerTag) => tag
// ).length > 0
// );


// return this.followers.map(
// (follower) => follower.tags.includes (tag)
// );
}