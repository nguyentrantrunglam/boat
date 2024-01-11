// import {userInfo} from './user.js'

const userInfo = {
    img: "./assets/Bessie Cooper.png",
    username: "Bessie Cooper"
}

const userList = [
    {
        id: 1,
        avatar: "./assets/Bessie Cooper.png",
        username: "Bessie Cooper",
        user: true
    },
    {
        id: 2,
        avatar: "./assets/Theresa Webb.png",
        username: "Theresa Webb",
        user: false
    },
    {
        id: 3,
        avatar: "./assets/Brosanova.png",
        username: "Brosanova",
        user: false
    },
    {
        id: 4,
        avatar: "./assets/Kathryn Murphy.png",
        username: "Kathryn Murphy",
        user: false
    },
    {
        id: 5,
        avatar: "./assets/postavatar.png",
        username: "Ralph Edwards",
        user: false
    }
]

console.log(userInfo);

var activeSideBarId = 2

const sidebarItems1 = [
    {
        id: 1,
        icon: "./assets/siren-on.svg",
        label: "News",
        notiCount: 12
    },
    {
        id: 2,
        icon: "./assets/chalkboard.svg",
        label: "Technology",
        notiCount: 12
    },
    {
        id: 3,
        icon: "./assets/play.svg",
        label: "Music",
        notiCount: 0
    },
    {
        id: 4,
        icon: "./assets/comment-alt.svg",
        label: "Feedback",
        notiCount: 100
    }
]
var sidebarlastElementId = sidebarItems1[sidebarItems1.length - 1].id + 1
const sidebarItems2 = [
    {
        id: sidebarlastElementId,
        icon: "./assets/clipboard-check.svg",
        label: "Survey",
        notiCount: 12
    }
]

const listPost = [
    {
        id: 1,
        userid: 5,
        time: 15,
        content: "Search input is a must have of almost all apps. In this cheatsheet you can get inspiration on 6 variants of this component. Which one is your favorite?",
        reactions: 41,
        commentCount: 32,
        img: "./assets/Rectangle 2.svg",
        comments: [
            {
                postid: 1,
                id: 1,
                userid: 1,
                time: 15,
                content: "Soo great!!!"
            },
            {
                postid: 1,
                id: 2,
                userid: 2,
                time: 30,
                content: "Still doing this man"
            },
            {
                postid: 1,
                id: 3,
                userid: 3,
                time: 40,
                content: "Still doing this man"
            },
            {
                postid: 1,
                id: 4,
                userid: 4,
                time: 60,
                content: "Great choice of Acronym AF1's"
            },
        ]
    },
    {
        id: 2,
        userid: 5,
        time: 15,
        content: "Search input is a must have of almost all apps. In this cheatsheet you can get inspiration on 6 variants of this component. Which one is your favorite?",
        reactions: 41,
        commentCount: 32,
        img: "./assets/Rectangle 2.svg",
        comments: [
            {
                postid: 2,
                id: 1,
                userid: 1,
                time: 15,
                content: "Soo great!!!"
            },
            {
                postid: 2,
                id: 2,
                userid: 2,
                time: 30,
                content: "Still doing this man"
            },
            {
                postid: 2,
                id: 3,
                userid: 3,
                time: 40,
                content: "Still doing this man"
            },
            {
                postid: 2,
                id: 4,
                userid: 4,
                time: 60,
                content: "Great choice of Acronym AF1's"
            },
        ]
    },

]

var activeHeader2Id = 1

const headerNavItems = [
    {
        id: 1,
        label: "Home",
        img: "home"
    },
    {
        id: 2,
        label: "Post",
        img: "paper-plane"
    }
    , {
        id: 3,
        label: "Activity",
        img: "heart"
    }
    , {
        id: 4,
        label: "Bookmark",
        img: "bookmark"
    }
]

function renderHeader2Item(item, isActive) {
    return `
    <div class="item" onclick="handleClickHeader2Item(${item.id})">
        <div class="icon"><img src="./assets/${item.img}-alt${isActive ? "-active" : ''}.svg" alt=""></div>
        <div class="${isActive ? "htitle-color" : "htitle"}">${item.label}</div>
    </div>
    `
}

function handleClickHeader2Item(id) {
    activeHeader2Id = id
    renderHeader2()
}

function renderHeader2() {
    const header2 = document.querySelector(".header-2")
    let innerHeader2 = ''
    headerNavItems.forEach((item) => {
        innerHeader2 += renderHeader2Item(item, item.id == activeHeader2Id)
    })
    header2.innerHTML = innerHeader2
}

function renderSideBarItem(item, isActive) {
    if (item.notiCount > 99) {
        item.notiCount = "99+"
    }
    if (item.notiCount < 1) {
        return `
        <div class="block-heading${isActive ? "-chosen" : ''}" onclick="handleClickSideBarItem(${item.id})">
        <div class="icon-action">
          <img src="${item.icon}" alt="">
        </div>
        <div class="heading${isActive ? "-chosen" : ''}">
        ${item.label}
        </div>
        </div>
        `
    }
    return `
    <div class="block-heading${isActive ? "-chosen" : ''}" onclick="handleClickSideBarItem(${item.id})">
        <div class="icon-action">
          <img src="${item.icon}" alt="">
        </div>
        <div class="heading${isActive ? "-chosen" : ''}">
        ${item.label}
        </div>
        <div class="button">
            <div class ="noti-num">${item.notiCount}</div>
        </div>  
    </div>
    `
}

function handleClickSideBarItem(id) {
    activeSideBarId = id;
    renderSideBar();
}

function renderSideBar() {
    const sideBarBlock1 = document.querySelector("#sb1")
    let innerSidebar = ''
    sidebarItems1.forEach((item) => {
        innerSidebar += renderSideBarItem(item, item.id == activeSideBarId)
    })
    sideBarBlock1.innerHTML = innerSidebar
    const sideBarBlock2 = document.querySelector("#sb2")
    innerSidebar = ''
    sidebarItems2.forEach((item) => {
        innerSidebar += renderSideBarItem(item, item.id == activeSideBarId)
    })
    sideBarBlock2.innerHTML = innerSidebar
}

function renderPosts() {
    const postBlock = document.querySelector("#postBlocks")
    let postItem = ''
    listPost.forEach(post => {
        postItem += renderPostItem(post)
    })
    console.log(postBlock);
    postBlock.innerHTML = postItem;
}

function renderPostItem(post) {
    let postItem = ''
    postItem +=
        ` <div class="post">
        <div class="post-heading">
            <div class="info-action">
                <div class="user-info">
                    <img class="post-avatar" src="${userList[post.userid-1].avatar}" alt="">
                    <div class="name-time">
                        <div class="post-name">${userList[post.userid-1].username}</div>
                        <div class="post-time">${post.time} minutes ago</div>
                    </div>
                </div>
                <img class="post-action-button" src="./assets/Button Action.svg" alt="">
                <img class="post-action-button" src="./assets/Button Action (1).svg" alt="">
                <img class="post-action-button" src="./assets/Button Action (2).svg" alt="">
            </div>
            <p class="post-text">${post.content}</p>
            <p class="post-link">View more..</p>
        </div>
        <img class="post-img" src="${post.img}" alt="">
        <div class="post-action">
            <div class="post-add-action">
                <img class="post-reaction-button" src="./assets/smile.svg" alt="">
                <div class="post-comment-reaction-count-textstyle">
                ${post.reactions} Reactions
                </div>
            </div>
            <div class="post-add-action">
                <img class="post-reaction-button" src="./assets/comment-alt.svg" alt="">
                <div class="post-comment-reaction-count-textstyle">
                ${post.commentCount} comments
                </div>
            </div>
        </div>
        <div class="line"></div>

        <div id="commentsBox-${post.id}" class="post-commentsection"></div>
        
    
        <div id="commentBar" class="comment-bar">
            <img class="commentbar-avatar" src="./assets/Bessie Cooper.png" alt="">
            <div class="commentbar-inputfield">
                <div class="commentbar-inputfield-frame">
                    <input onblur="onblurCommentBar(${post.id})" onfocus="onfocusCommentBar(${post.id})" 
                    id="commentInput-${post.id}" type="text" placeholder="Write a comment.." class="commentbar-inputfield-frame-textbox">
                    </input>
                </div>
                <div id="cancelButtonContainer-${post.id}"></div>
                <div id="commentButtonContainer-${post.id}">
                    <div onclick="getCommentBarValue(${post.id})" id="commentButton-${post.id}" class="comment-button-shaded">
                        <div id="commentButtonText-${post.id}" class="comment-post">
                        Post
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    return postItem;
}
// Add this after "lines" in postItems to generate comments with posts at the same time
// postItem += `<div id="commentsbox" class="post-commentsection">`
// post.comments.forEach(comment => {
//     postItem += renderCommentItem(comment)
// })
// postItem += `</div>`

// postItem += `

// onblur="getCommentValue(${post.postid})"4
function onfocusCommentBar(id) {
    var idVal = document.getElementById("commentInput-" + id)
    idVal.classList.replace("commentbar-inputfield-frame-textbox", "commentbar-inputfield-frame-textbox-focused")
    var element = document.getElementById("commentButton-" + id);
    element.classList.replace("comment-button-shaded", "comment-button");
}

// function changeClassCommentShaded() {
//     var element = document.querySelector(".comment-button-shaded");
//     var a = document.querySelector(".commentbar-inputfield-frame-textbox");
//     if (a) {
//         element.classList.replace("comment-button-shaded", "comment-button");
//     }
//     console.log("happened");
// }

function onblurCommentBar(id) {
    var element = document.getElementById("commentButton-" + id);
    element.classList.replace("comment-button", "comment-button-shaded");
}

function renderComments() {
    listPost.forEach(post => {
        const commentsBlock = document.querySelector("#commentsBox-" + post.id)
        let commentItem = ''
        post.comments.forEach(comment => {
            commentItem += renderCommentItem(comment)
            console.log(userList[comment.userid-1].avatar);
            commentsBlock.innerHTML = commentItem;
        })
    }
    )
}

function renderCommentItem(comment) {
    if (userList[comment.userid-1].user) {
        console.log("user");
        return `
            <div id="postComment-${comment.postid}-${comment.id}" class="post-comment" 
            >
              <img class="comment-avatar" src="${userList[comment.userid-1].avatar}" alt="">
              <div>
                <div class="comment-info">
                  <div class="post-name">${userList[comment.userid-1].username}</div>
                  <div class="comment-time">${comment.time} minutes ago</div>
                </div>
                <div class="comment-text">${comment.content}</div>
              </div>
              <div class= "post-comment-whitespace"></div>
              <div id="commentAction-${comment.postid}-${comment.id}" class="user-comment-action">
                <div class="post-user-comment-action">
                    <button onclick="editMyComment(${comment.postid},${comment.id})" id="editComment" class="post-comment-action-block">
                    <img style='height: 100%; width: 100%; object-fit: contain' src="./assets/pen.png" alt="">
                </button>
                <button onclick="deleteComment(${comment.postid},${comment.id})" id="deleteComment" class="post-comment-action-block">
                    <img style='height: 100%; width: 100%; object-fit: contain' src="./assets/trash.png" alt="">
                </button>
                </div>
              </div>
            </div>
        `
    }
    else{
        console.log("not user");
    return `
        <div id="postComment-${comment.postid}-${comment.id}" class="post-comment" 
        >
          <img class="comment-avatar" src="${userList[comment.userid-1].avatar}" alt="">
          <div>
            <div class="comment-info">
              <div class="post-name">${userList[comment.userid-1].username}</div>
              <div class="comment-time">${comment.time} minutes ago</div>
            </div>
            <div class="comment-text">${comment.content}</div>
          </div>
          <div class= "post-comment-whitespace"></div>
          <div id="commentAction-${comment.postid}-${comment.id}" class="user-comment-action">
          </div>
        </div>
        `
    }
}

function renderNewCommentItem(val, id) {
    listPost[id - 1].comments.push(
        {
            postid: id,
            id: listPost[id - 1].comments[listPost[id - 1].comments.length - 1].id + 1,
            avatar: "./assets/" + userInfo.img,
            name: userInfo.username,
            time: 0,
            content: val
        })
    clearText("commentInput-" + listPost[id - 1].id)
    renderComments();
}

function getCommentBarValue(id) {
    const idj = "commentInput-" + id
    const val = document.getElementById(idj).value
    const button = document.getElementById("commentButtonText-" + id).innerText
    if (button == "Post") {
        renderNewCommentItem(val, id)
    }
    else if (button == "Edit") {
        return val;
    }
}

function editMyComment(postId, commentId) {
    const commentBar = document.getElementById("commentInput-" + postId)
    commentBar.value = listPost[postId - 1].comments[commentId - 1].content
    const cancelButton = document.getElementById("cancelButtonContainer-" + postId)
    const editButton = document.getElementById("commentButtonContainer-" + postId)
    cancelButton.innerHTML = `
    <div onclick="handleCancelButton(${postId})" id="cancelButton-${postId}" class="cancel-button">
        <div id="cancelButtonText-${postId}" class="cancel-button-text">
            Cancel
        </div>
    </div>
    `
    editButton.innerHTML = `
    <div onclick="handleEditButton(${postId},${commentId})" id="commentButton-${postId}" class="comment-button-shaded">
        <div id="commentButtonText-${postId}" class="comment-post">
        Edit
        </div>
    </div>
    `
    commentBar.focus();
}

function handleEditButton(postId, commentId) {
    listPost[postId - 1].comments[commentId - 1].content = getCommentBarValue(postId);
    clearText("commentInput-" + postId)
    const editButton = document.getElementById("commentButtonContainer-" + postId)
    const cancelButton = document.getElementById("cancelButtonContainer-" + postId)
    cancelButton.innerHTML = ``
    editButton.innerHTML = `
    <div onclick="getCommentBarValue(${postId})" id="commentButton-${postId}" class="comment-button-shaded">
        <div id="commentButtonText-${postId}" class="comment-post">
            Post
        </div>
    </div>
    `
    renderComments();
}

function handleCancelButton(postId) {
    clearText("commentInput-" + postId)
    const editButton = document.getElementById("commentButtonContainer-" + postId)
    const cancelButton = document.getElementById("cancelButtonContainer-" + postId)
    cancelButton.innerHTML = ``
    editButton.innerHTML = `
    <div onclick="getCommentBarValue(${postId})" id="commentButton-${postId}" class="comment-button-shaded">
        <div id="commentButtonText-${postId}" class="comment-post">
            Post
        </div>
    </div>
    `
    renderComments();
}

function deleteComment(postId, commentId) {
    listPost[postId - 1].comments.splice(commentId - 1, 1);
    renderComments();
}

function clearText(id) {
    const val = document.getElementById(id).value
    document.getElementById(id).value = '';
}

function renderApp() {
    renderHeader2();
    renderSideBar();
    renderPosts();
    renderComments();
}

renderApp()


// document.querySelector(".commentbar-inputfield-frame-textbox").addEventListener('focus', changeClassCommentShaded);
// document.querySelector(".commentbar-inputfield-frame-textbox").addEventListener('focusout', changeClassComment);