const model = document.querySelector("#my-model");
const publish = document.querySelector(".submit-btn");
const cancelPublish = document.querySelector(".cancel-btn");
const editModel = document.querySelector("#my-edit-model");
const createBlog = document.querySelector("#create-blog");
const editBlog = document.querySelector("#edit-skill");
const editBlog1 = document.querySelector("#edit-skill1");
const editBlog2 = document.querySelector("#edit-skill2");
const saveedit = document.querySelector(".submit-update-btn");
const canceledit = document.querySelector(".cancel-update-btn");
const close = document.getElementsByClassName("close")[0];
const deleteBlog = document.querySelector("#my-delete-model");
const deleteBtn = document.querySelector(".delete-blog");
const deleteBtn1 = document.querySelector(".delete-blog1");
const deleteBtn2 = document.querySelector(".delete-blog2");
const comfirm = document.querySelector(".comfirm");
const cancelDelete = document.querySelector(".cancel-delete");
const skill = document.querySelector("#add-skill");
const Skill = document.querySelector("#my-add-model");
const saveSkill = document.querySelector(".save-language-btn");
const cancelSkill = document.querySelector(".cancel-language-btn");
const updateSkills = document.querySelector("#my-update-model");
const updateBtn = document.querySelector(".edit-skills");
const updateBtn1 = document.querySelector(".edit-skills1");
const updateBtn2 = document.querySelector(".edit-skills2");
const updateBtn3 = document.querySelector(".edit-skills3");
const updateBtn4 = document.querySelector(".edit-skills4");
const saveupdate = document.querySelector(".save-language-update-btn");
const cancelupdate = document.querySelector(".cancel-language-update-btn");
const deleteSkills = document.querySelector("#my-delete-skill-model");
const deleteSkillbtn = document.querySelector(".remove-skills");
const deleteSkillbtn1 = document.querySelector(".remove-skills1");
const deleteSkillbtn2 = document.querySelector(".remove-skills2");
const deleteSkillbtn3 = document.querySelector(".remove-skills3");
const deleteSkillbtn4 = document.querySelector(".remove-skills4");
const comfirmDeleteSkillBtn = document.querySelector(".comfirm-skill-delete");
const cancelSkillDeleteBtn = document.querySelector(".cancel-skill-delete");

createBlog.addEventListener("click", function () {
  model.style.display = "block";
});
publish.addEventListener("click", function () {
  model.style.display = "none";
});
cancelPublish.addEventListener("click", function () {
  model.style.display = "none";
});
close.onclick = function () {
  model.style.display = "none";
};
window.onclick = function () {
  if (event.target == model) {
    model.style.display = "none";
  }
};
// edit blog

editBlog.addEventListener("click", function () {
  editModel.style.display = "block";
  console.log("hi dear");
});

// editBlog1.addEventListener("click", function () {
//   editModel.style.display = "block";
//   console.log("hi dear");
// });

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
saveedit.addEventListener("click", function () {
  editModel.style.display = "none";
});
canceledit.addEventListener("click", function () {
  editModel.style.display = "none";
});
// delete a blog

deleteBtn.addEventListener("click", function () {
  deleteBlog.style.display = "block";
});
deleteBtn1.addEventListener("click", function () {
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

// add skill

skill.addEventListener("click", function () {
  Skill.style.display = "block";
});
close.onclick = function () {
  Skill.style.display = "none";
};
window.onclick = function () {
  if (event.target == Skill) {
    Skill.style.display = "none";
  }
};
saveSkill.addEventListener("click", function () {
  Skill.style.display = "none";
});
cancelSkill.addEventListener("click", function () {
  Skill.style.display = "none";
});

// update skills

updateBtn.addEventListener("click", function () {
  updateSkills.style.display = "block";
});
updateBtn1.addEventListener("click", function () {
  updateSkills.style.display = "block";
});
updateBtn2.addEventListener("click", function () {
  updateSkills.style.display = "block";
});
updateBtn3.addEventListener("click", function () {
  updateSkills.style.display = "block";
});
updateBtn4.addEventListener("click", function () {
  updateSkills.style.display = "block";
});
close.onclick = function () {
  updateSkills.style.display = "none";
};
// window.onclick = function () {
//   if (event.target == updateSkills) {
//     updateSkills.style.display = "none";
//   }
// };
saveupdate.addEventListener("click", function () {
  updateSkills.style.display = "none";
});
cancelupdate.addEventListener("click", function () {
  updateSkills.style.display = "none";
});

// delete skills

deleteSkillbtn.addEventListener("click", function () {
  deleteSkills.style.display = "block";
});
deleteSkillbtn1.addEventListener("click", function () {
  deleteSkills.style.display = "block";
});
deleteSkillbtn2.addEventListener("click", function () {
  deleteSkills.style.display = "block";
});
deleteSkillbtn3.addEventListener("click", function () {
  deleteSkills.style.display = "block";
});
deleteSkillbtn4.addEventListener("click", function () {
  deleteSkills.style.display = "block";
});
close.onclick = function () {
  deleteSkills.style.display = "none";
};
window.onclick = function () {
  if (event.target == deleteSkills) {
    deleteSkills.style.display = "none";
  }
};
comfirmDeleteSkillBtn.addEventListener("click", function () {
  deleteSkills.style.display = "none";
});
cancelSkillDeleteBtn.addEventListener("click", function () {
  deleteSkills.style.display = "none";
});