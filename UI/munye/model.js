const model = document.querySelector("#my-model");
const publish = document.querySelector(".submit-btn");
const cancelPublish = document.querySelector(".cancel-btn");
const editModel = document.querySelector("#my-edit-model");
const createBlog = document.querySelector("#create-blog");
// const editBlog = document.querySelector(".update");
const editBlog1 = document.querySelector("#edit-skill1");
console.log(editBlog1);
const editBlog2 = document.querySelector("#edit-skill2");
// const saveedit = document.querySelector(".submit-update-btn");
const canceledit = document.querySelector(".cancel-update-btn");
const close = document.getElementsByClassName("close")[0];
const deleteBlog = document.querySelector("#my-delete-model");
const deleteBtn = document.querySelector(".delete-blog");
const deleteBtn1 = document.querySelector(".delete-blog1");
const deleteBtn2 = document.querySelector(".delete-blog2");
const comfirm = document.querySelector(".comfirm");
const cancelDelete = document.querySelector(".cancel-delete");


// validate the form
const articleForm = document.querySelector('form');

const image = document.querySelector(".article-picture");
image.addEventListener("change", () => {
  const reader = new FileReader();
  reader.onload = () => {
    const imageUrls = reader.result;
    // console.log(imageUrls)
    localStorage.setItem("recent-image", imageUrls);
    localStorage.setItem("save", imageUrls);
    const imagePreview = localStorage.getItem("recent-image");
    document.querySelector("#image-preview").setAttribute("src", imagePreview);
    localStorage.removeItem("recent-image");
  };
  reader.readAsDataURL(image.files[0]);
});
const blogList = [];
const handleCreateArticle = (e) => {
  e.preventDefault();

  const formData = new FormData(articleForm).entries();
  const { title, description } = Object.fromEntries(formData);

  const titleErrorMessage = validateTitle(title);
  const descriptionErrorMessage = validateDescription(description);

  if (titleErrorMessage) {
    const titleErrorMessageElement = document.querySelector(
      ".title-error.error-message"
    );
    titleErrorMessageElement.style.display = "block";
    titleErrorMessageElement.innerText = titleErrorMessage;
    if (descriptionErrorMessage) {
      const descriptionErrorMessageElement = document.querySelector(
        ".detailed-description.error-message"
      );
      descriptionErrorMessageElement.style.display = "block";
      descriptionErrorMessageElement.innerText = descriptionErrorMessage;
    }
  }
  if ((descriptionErrorMessage === " ") & (titleErrorMessage === " ")) {
    const titleErrorMessageElement = document.querySelector(
      ".title-error.error-message"
    );
    titleErrorMessageElement.style.display = "none";

    const descriptionErrorMessageElement = document.querySelector(
      ".detailed-description.error-message"
    );
    descriptionErrorMessageElement.style.display = "none";

    const imageUrl = localStorage.getItem("save");
    const blog = {
      id: Date.now(),
      imageUrl,
      title,
      description,
      like: 0,
      comments: [],
      numberOfComments: 0,
      createdAt: new Date().toISOString().split('T')[0],
    };
    const getBlogs = JSON.parse(localStorage.getItem("blogList"));
    if (getBlogs?.length >= 1) {
      getBlogs.push(blog);
      console.log(getBlogs);
      const articleList = "\n" + JSON.stringify(getBlogs, "\t", 2);

      localStorage.setItem("blogList", articleList);
      localStorage.removeItem("save");
      document.querySelector("form").reset();
      model.style.display = "none";
      window.location.reload();
    } else {
      blogList.push(blog);
      console.log(blogList);
      const articleList = "\n" + JSON.stringify(blogList, "\t", 2);

      localStorage.setItem("blogList", articleList);
      localStorage.removeItem("save");
      document.querySelector("form").reset();
      model.style.display = "none";
      window.location.reload();
    }
  }
};

 const validateTitle = (title) => {
   if (!title.trim()) return "Title of the article is required";
   if (title.trim().length < 8) return "Title must be atleast 8 character long";
   return " ";
 };
 const validateDescription = (description) => {
   if (!description.trim()) return "decription of the article is required";
   if (description.trim().length < 20)
     return "article description must be atleast 20 character long";
   return " ";
 };



createBlog.addEventListener("click", function () {
  model.style.display = "block";
});
publish.addEventListener("click",handleCreateArticle);
cancelPublish.addEventListener("click", function () {
  model.style.display = "none";
});
close.onclick = function () {
  model.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == model) {
    model.style.display = "none";
  }
};

editBlog1.addEventListener("click", function () {
  editModel.style.display = "block";
  console.log("hi dear");
});

editBlog2.addEventListener("click", function () {
  editModel.style.display = "block";
  console.log("hi dear");
});
close.onclick = function () {
  editModel.style.display = "none";
  editModel.style.ransition = "0.4s ease-in-out";
};
window.onclick = function () {
  if (event.target == editModel) {
    editModel.style.display = "none";
  }
};

canceledit.addEventListener("click", function () {
  editModel.style.display = "none";
});
// delete a blog

deleteBtn.addEventListener("click", function () {
  deleteBlog.style.display = "block";
});

deleteBtn2.addEventListener("click", function () {
  deleteBlog.style.display = "block";
});
close.onclick = function () {
  deleteBlog.style.display = "none";
};

comfirm.addEventListener("click", function () {
  deleteBlog.style.display = "none";
});
cancelDelete.addEventListener("click", function () {
  deleteBlog.style.display = "none";
});

