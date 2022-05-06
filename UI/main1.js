//This is for signup
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": "admin123@gmail.com",
  "password": "123456789"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:5000/signup", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

/////////////////////////////////////////////////////
//This is for login
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzMyMWZmZjgwMTZiYTZmYTA0ZTY4YyIsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjUxNzEyNjAxfQ.bguu1DTGyS3mq8Ut6IMai_AtEPU0KtDGQ_2bdZbInGc");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": "admin123@gmail.com",
  "password": "123456789"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:5000/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//////////////////////////////////////////////////////////////
//THIS IS FOR ARTCILES

//This is for Getting all articles writen by an admin
fetch("https://my-brand-heroku.herokuapp.com/articles", {
  method: "GET",
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${adminToken}`,
  },
})
  .then((result) => result.json())
  .then((res) => console.log(res.data));

//This is for getting a single article by it's id

fetch("https://my-brand-heroku.herokuapp.com/articles/{articleId}", {
  method: "GET",
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${adminToken}`,
  },
})
  .then((result) => result.json())
  .then((res) => console.log(res.data));

// This is for deleting an article based on its id
fetch("https://my-brand-heroku.herokuapp.com/articles/{articleId}", {
  method: "DELETE",
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${adminToken}`,
  },
})
  .then((result) => result.json())
  .then((res) => console.log(res.data));

// This is for updating an article based on its id
fetch("https://my-brand-heroku.herokuapp.com/articles/{articleId}", {
  method: "PATCH",
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${adminToken}`,
  },
})
  .then((result) => result.json())
  .then((res) => console.log(res.data));

  ///////////////////////////////////////////////////////

//THIS IS FOR COMMENTS

// This is for showing all comments for one/single article
fetch("https://my-brand-heroku.herokuapp.com/articles/{articleId}/comments", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${adminToken}`,
  },
})
  .then((result) => result.json())
  .then((res) => console.log(res.data));

// This is for deleting a comment of an artcile based on an article ID
fetch("https://my-brand-heroku.herokuapp.com/articles{articleId}/comments", {
  method: "DELETE",
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${adminToken}`,
  },
})
  .then((result) => result.json())
  .then((res) => console.log(res.data));

// This is for adding a comment/reply to a selected article based on its id
fetch("https://my-brand-heroku.herokuapp.com/articles{articleId}", {
  method: "GET",
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${adminToken}`,
  },
})
  .then((result) => result.json())
  .then((res) => console.log(res.data));

  ////////////////////////////////////////////////////////////////////////

//This is for likes

// This is for getting all likes on all articles
fetch("https://my-brand-heroku.herokuapp.com/articles/{articleId}/Likes", {
  method: "GET",
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${adminToken}`,
  },
})
  .then((result) => result.json())
  .then((res) => console.log(res.data));

// This is for getting likes of a single article
fetch("https://my-brand-heroku.herokuapp.com/articles/{articleId}/Likes", {
  method: "GET",
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${adminToken}`,
  },
})
  .then((result) => result.json())
  .then((res) => console.log(res.data));

//This is for deleting likes of a given article
fetch("https://my-brand-heroku.herokuapp.com/articles/{articleId}/Likes", {
  method: "DELETE",
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${adminToken}`,
  },
})
  .then((result) => result.json())
  .then((res) => console.log(res.data));
