

let listItems = [
    {
        id: "1",
        icon: "./assets/siren-on.svg",
        label: "News",
        notiCount: 12
    },
    {
        id: "2",
        icon: "./assets/chalkboard.svg",
        label: "Technology",
        notiCount: 12
    },
    {
        id: "3",
        icon: "./assets/play.svg",
        label: "Music",
        notiCount: 0
    },
    {
        id: "4",
        icon: "./assets/comment-alt.svg",
        label: "Feedback",
        notiCount: 100
    }
    // {
    //     "id": "5",
    //     "icon": "./assets/clipboard-check.svg",
    //     "label": "Survey",
    //     "notiCount": 12
    // }
]

let listPost = [
    {
        id: "1",
        avatar: "./assets/postavatar.png",
        name: "Ralph Edwards",
        time: 15,
        content: "Search input is a must have of almost all apps. In this cheatsheet you can get inspiration on 6 variants of this component. Which one is your favorite?",
        reactions: 41,
        commentCount: 32,
        img: "./assets/Rectangle 2.svg",
        comments: [
            {
                postid: 1,
                id: "1",
                avatar: "./assets/Bessie Cooper.png",
                name: "Bessie Cooper",
                time: 15,
                content: "Soo great!!!"
            },
            {
                postid: 1,
                id: "2",
                avatar: "./assets/Theresa Webb.png",
                name: "Bessie Cooper",
                time: 30,
                content: "Still doing this man"
            },
            {
                postid: 1,
                id: "3",
                avatar: "./assets/Brosanova.png",
                name: "Bessie Cooper",
                time: 40,
                content: "Still doing this man"
            },
            {
                postid: 1,
                id: "4",
                avatar: "./assets/Kathryn Murphy.png",
                name: "Bessie Cooper",
                time: 60,
                content: "Great choice of Acronym AF1's"
            },
        ]
    },
    {
        id: "2",
        avatar: "./assets/postavatar.png",
        name: "Ralph Edwards",
        time: 15,
        content: "Search input is a must have of almost all apps. In this cheatsheet you can get inspiration on 6 variants of this component. Which one is your favorite?",
        reactions: 41,
        commentCount: 32,
        img: "./assets/Rectangle 2.svg",
        comments: [
            {
                postid: 1,
                id: "1",
                avatar: "./assets/Bessie Cooper.png",
                name: "Bessie Cooper",
                time: 15,
                content: "Soo great!!!"
            },
            {
                postid: 1,
                id: "2",
                avatar: "./assets/Theresa Webb.png",
                name: "Bessie Cooper",
                time: 30,
                content: "Still doing this man"
            },
            {
                postid: 1,
                id: "3",
                avatar: "./assets/Brosanova.png",
                name: "Bessie Cooper",
                time: 40,
                content: "Still doing this man"
            },
            {
                postid: 1,
                id: "4",
                avatar: "./assets/Kathryn Murphy.png",
                name: "Bessie Cooper",
                time: 60,
                content: "Great choice of Acronym AF1's"
            },
        ]
    },

]

let listHeader = [
    {
        id : 1,
        icon : "./assets/home-alt.svg",
        title : "Home"
    },
    {
        id : 2,
        icon : "./assets/paper-plane.svg",
        title : "Post"
    },
    {
        id : 3,
        icon : "./assets/heart.svg",
        title : "Activity"
    },
    {
        id : 4,
        icon : "./assets/bookmark.svg",
        title : "Bookmark"
    }
]

function renderHeader() {
    const headerBlock = document.querySelector('#hd')
    let headerBlockItem = ''
    listHeader.forEach(header => {
        headerBlockItem += `
        <button onclick="headerChangeClass('headerSelect_${header.id}')" id="sidebarSelect_${header.id}" class="item">
        <div class="icon"><img src="${header.icon}" alt=""> </div>
        <div class="htitle"> ${header.title} </div>
      </button
        `
    })
    headerBlock.innerHTML = headerBlockItem;
}
renderHeader();

function renderSideBar() {
    const sideBarBlock = document.querySelector('#sb')
    let sideBarBlockItem = ''
    listItems.forEach(item => {
        if (item.notiCount > 99) {
            item.notiCount = "99+"
        }
        sideBarBlockItem += `<button onclick="changeClass('sidebarSelect_${item.id}')" id="sidebarSelect_${item.id}" class="block-heading">
        <div class="icon-action">
          <img src="${item.icon}" alt="">
        </div>
        <div class="heading">
        ${item.label}
        </div>
        <div class="button">
            <div class ="noti-num">${item.notiCount}</div>
        </div>  
      </button>`
    })
    console.log(sideBarBlock);
    sideBarBlock.innerHTML = sideBarBlockItem;
}

renderSideBar();

function renderPosts() {
    const postBlock = document.querySelector("#postBlock")
    let postItem = ''
    listPost.forEach(post => {
        postItem += `
        <div id="${post.id}" class="post">
          <div class="post-heading">
            <div class="info-action">
              <div class="user-info">
                <img class="post-avatar" src="${post.avatar}" alt="">
                <div class="name-time">
                  <div class="post-name">${post.name}</div>
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
              <img class="post-reaction-button" src="./assets/reaction.svg" alt="">
              <div class="post-comment-reaction-count-textstyle">
                ${post.reactions} Reactions
              </div>
            </div>
            <div class="post-add-action">
              <img class="post-reaction-button" src="./assets/comment.svg" alt="">
              <div class="post-comment-reaction-count-textstyle">
                ${post.commentCount} comments
              </div>
            </div>
          </div>
        `
        postItem += `<div id="commentsbox" class="post-commentsection">`
        post.comments.forEach(comment => {
            postItem += renderCommentItem(comment)
        })
        postItem += `</div></div>`

        postItem += `<div class="comment-bar">
        <img class="commentbar-avatar" src="./assets/Bessie Cooper.png" alt="">
        <div class="commentbar-inputfield">
          <div class="commentbar-inputfield-frame">
            <input type="text" placeholder="Write a comment.." class="commentbar-inputfield-frame-textbox">
        
            </input>
          </div>
          <div class="comment-button-shaded">
            <div class="comment-post">
              Post
            </div>
          </div>
        </div>
        </div>`})

    console.log(postBlock);
    postBlock.innerHTML = postItem;
}

renderPosts();

function sidebarChangeClass(id) {
    var chosenElement = document.querySelector(".block-heading-chosen");
    if (chosenElement) {
        var childChosen = chosenElement.children[1]
        chosenElement.classList.replace("block-heading-chosen", "block-heading");
        childChosen.classList.replace("heading-chosen", "heading");
    }
    var element = document.querySelector("#" + id);
    var child = element.children[1];
    element.classList.replace("block-heading", "block-heading-chosen");
    child.classList.replace("heading", "heading-chosen");
}

function headerChangeClass(id) {
    var chosenElement = document.querySelector(".block-heading-chosen");
    if (chosenElement) {
        var childChosen = chosenElement.children[1]
        chosenElement.classList.replace("block-heading-chosen", "block-heading");
        childChosen.classList.replace("heading-chosen", "heading");
    }
    var element = document.querySelector("#" + id);
    var child = element.children[1];
    element.classList.replace("block-heading", "block-heading-chosen");
    child.classList.replace("heading", "heading-chosen");
}

document.querySelector(".commentbar-inputfield-frame-textbox").addEventListener('focus', changeClassCommentShaded);
document.querySelector(".commentbar-inputfield-frame-textbox").addEventListener('focusout', changeClassComment);
function changeClassCommentShaded() {
    var element = document.querySelector(".comment-button-shaded");
    var a = document.querySelector(".commentbar-inputfield-frame-textbox");
    if (a) {
        element.classList.replace("comment-button-shaded", "comment-button");
    }
}

function changeClassComment() {
    var element = document.querySelector(".comment-button");
    var a = document.querySelector(".commentbar-inputfield-frame-textbox");
    if (a) {
        element.classList.replace("comment-button", "comment-button-shaded");
    }
}

function renderCommentItem(comment) {
    return `
    <div class="post-comment">
      <img class="comment-avatar" src="${comment.avatar}" alt="">
      <div class="comment-noava">
        <div class="comment-info">
          <div class="post-name">${comment.name}</div>
          <div class="comment-time">${comment.time} minutes ago</div>
        </div>
        <div class="comment-text">${comment.content}</div>
      </div>
    </div>
    `
}

