Template.postsList.helpers({
  posts: function () {
    return Posts.find(); // Grab the posts from the database.....
  }
});
