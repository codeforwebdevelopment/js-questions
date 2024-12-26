
// You are building a social network with influencers and their followers. You want to calculate the reach of a user. The reach is the number of users a given user can reach, given a certain degree of separation, including himself or herself. For example:
// • At zero degrees of separation, the user can only reach himself or herself, so the reach is 1.
// • At one degree of separation, the user can reach his/her direct followers plus himself/herself.
// • At two degrees of freedom, the user can reach their direct followers, AND their followers' direct followers, plus himself/herself.
// Fill in the missing line:
class User {
/**
*@param {User[]} followers
*/
constructor (followers) {
this.followers = followers;
}

/**
* The numbers of Users this User can reach with degreesOfSeparation hops,
* including themselves
* @param {number} degreesOfSeparation
*/
getReach (degreesOfSeparation) {
if (degreesOfSeparation <= 0) {
    return 1;
}
return (
1 +
this.followers
.map((follower) => {
})
// FILL IN THIS LINE
.reduce(function (a, b) { return a + b;
}, 0)
);
}
}
// Select the best option:
// A. return 1;
// B.
// return follower.followers.length;
// C.
// return follower.getReach (degreesOfSeparation - 1);
// D.
// return 1 + follower.getReach (degreesOfSeparation 1);
