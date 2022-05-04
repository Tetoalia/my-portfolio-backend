const commentData = document.querySelector("form");
const submitComment = document.querySelector(".comment-btn")
console.log("mupagasi")
const getBlogs = JSON.parse(localStorage.getItem("blogList"))
console.log(getBlogs);
const Params =new URLSearchParams(window.location.search);
const postId = Params.get("id");
console.log(postId);
getBlogs?.map((article) => {
  if (article.id == postId) {
    const handleComments = (e) => {
      e.preventDefault();
      const formData = new FormData(commentData).entries();
      const { name, comment } = Object.fromEntries(formData);
      const NameErrorMessage = validateName(name);
      const CommentErrorMessage = validateCommentField(comment);

      if (NameErrorMessage) {
        const NameErrorMessageElement = document.querySelector(
          ".name.error-message"
        );
        NameErrorMessageElement.innerText = NameErrorMessage;
      }
      if (CommentErrorMessage) {
        const CommentErrorMessageElement = document.querySelector(
          ".comment.error-message"
        );
        CommentErrorMessageElement.innerText = CommentErrorMessage;
      }
      if ((NameErrorMessage === " ") & (CommentErrorMessage === " ")) {
        const articleComments = {
          name,
          comment,
        };
        article.comments.push(articleComments);
        article.numberOfComments++;
        const saveData = JSON.stringify(getBlogs);
        localStorage.setItem("blogList", saveData);
        document.querySelector("form").reset();
        console.log(getBlogs, article.comments);
      }
      // getComments();
    };

    
      async function getComments() {
        response = await fetch(
          "https://striker-server.herokuapp.com/api/v1/blog/comment"
        );
        Comments = await response.json();
        console.log(comments.commentsData);
      }


    const validateName = (name) => {
      if (!name.trim()) return "Name field is required";
      return " ";
    };
    const validateCommentField = (comment) => {
      if (!comment.trim()) return "Comment field is required";
      return " ";
    };
    submitComment.addEventListener("click", handleComments);
    const likes = document.getElementById("likes-number");
    const likeIcon = document.querySelector(".fa-thumbs-up");
    likeIcon.addEventListener("click", (e) => {
      e.preventDefault();
      article.like++;
      likes.innerText = `${article.like} likes`;
      localStorage.setItem("blogList", JSON.stringify(getBlogs));
    });
    likes.innerText = `${article.like} likes`;
  }
  console.log(article);
  let commentsData = document.getElementById("comment-holder");
  article.comments.map((comment) => {
    const html = `<div class="comment-guest">
            <div class="guest-profile">
              <img src="/img/12.jpg" alt="guest profile picture" class="guest">
            </div>

            <div class="comment-holder" >
              <div class="guest-comment">
                <h6 class="guest-name">${comment.name}</h6>
                <p class="guest-dot">.</p>
                <p class="date">Jan,01,2022</p>
              </div>
              <div class="comment-description">
                <p class="comment">
                  ${comment.comment}
                </p>
              </div>
            </div>`;
    console.log(comment);
    commentsData.innerHTML += html;
  });
});
function getComments(e) {
  e.preventDefault();
}