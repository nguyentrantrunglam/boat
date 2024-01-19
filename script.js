// import {userInfo} from './user.js'

var goLeftLesser;
var goRightLarger;
var dotSliderClick = false;

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

var activeSideBarId = 2

const sidebarItems1 = [
    {
        id: 1,
        icon: "siren-on",
        iconactive: "./assets/siren-on-active.svg",
        label: "News",
        notiCount: 12
    },
    {
        id: 2,
        icon: "chalkboard",
        iconactive: "./assets/chalkboard-active.svg",
        label: "Technology",
        notiCount: 12
    },
    {
        id: 3,
        icon: "play",
        iconactive: "./assets/play-active.svg",
        label: "Music",
        notiCount: 0
    },
    {
        id: 4,
        icon: "comment-alt",
        iconactive: "./assets/comment-alt-active.svg",
        label: "Feedback",
        notiCount: 100
    }
]
var sidebarlastElementId = sidebarItems1[sidebarItems1.length - 1].id + 1
const sidebarItems2 = [
    {
        id: sidebarlastElementId,
        icon: "clipboard-check",
        iconactive: "./assets/clipboard-check-active.svg",
        label: "Survey",
        notiCount: 12
    }
]

const listPost = [
    {
        id: 1,
        userid: 5,
        time: 15,
        content: "Search input is a must have of almost all apps. In this cheatsheet you can get inspiration on 6 variants of this component. Đã bao lâu chẳng thể nói được 1 lời Trip hơi sâu nhưng chắc, đấy mới là cuộc đời Dù chuyện chẳng đâu vào đâu nhưng em vẫn cố phải cười Mặc kệ giọng nói rầm rì ở trong tai Em vẫn biết từ đầu Rằng mình vốn không thuộc về nhau Nhưng khi bầu trời chuyển tối em vẫn luôn ở đấy",
        reactions: 41,
        img: ["./assets/Rectangle 1.png", "./assets/Rectangle 2.png", "./assets/Rectangle 3.png", "./assets/Rectangle 4.png", "./assets/Rectangle 3.png"],
        currentSlide: 1,
        imgEndFlag: false,
        imgStartFlag: false,
        dotSliderFlagFirstCondt: false,
        dotSliderFlagSecondCondt: false,
        dotSliderTarget: null,
        comments: [
            {
                postid: 1,
                id: 1,
                userid: 1,
                time: 15,
                content: "Soo great!!!",
                isedited: false
            },
            {
                postid: 1,
                id: 2,
                userid: 2,
                time: 30,
                content: "Still doing this man",
                isedited: true
            },
            {
                postid: 1,
                id: 3,
                userid: 3,
                time: 40,
                content: "Still doing this man",
                isedited: false
            },
            {
                postid: 1,
                id: 4,
                userid: 4,
                time: 60,
                content: "Great choice of Acronym AF1's",
                isedited: false
            }
        ],
    },
    {
        id: 2,
        userid: 5,
        time: 15,
        content: "Search input is a must have of almost all apps. In this cheatsheet you can get inspiration on 6 variants of this component. Which one is your favorite?",
        reactions: 41,
        img: ["./assets/Rectangle 2.png", "./assets/Rectangle 1.png", "./assets/Rectangle 3.png"],
        currentSlide: 1,
        imgEndFlag: false,
        imgStartFlag: false,
        dotSliderFlagFirstCondt: false,
        dotSliderFlagSecondCondt: false,
        dotSliderTarget: null,
        comments: [
            {
                postid: 2,
                id: 1,
                userid: 1,
                time: 15,
                content: "Soo great!!!",
                isedited: false
            },
            {
                postid: 2,
                id: 2,
                userid: 2,
                time: 30,
                content: "Still doing this man",
                isedited: false
            },
            {
                postid: 2,
                id: 3,
                userid: 3,
                time: 40,
                content: "Still doing this man",
                isedited: false
            },
            {
                postid: 2,
                id: 4,
                userid: 4,
                time: 60,
                content: "Great choice of Acronym AF1's",
                isedited: false
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
    if (item.notiCount < 1 | isActive) {
        item.notiCount = 0;
        return `
        <div class="block-heading${isActive ? "-chosen" : ''}" onclick="handleClickSideBarItem(${item.id})">
        <div class="icon-action">
          <img src="./assets/${item.icon}${isActive ? "-active" : ''}.svg" alt="">
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
          <img src="./assets/${item.icon}${isActive ? "-active" : ''}.svg" alt="">
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
        postItem = renderPostItem(post)
        postBlock.innerHTML += postItem;
        generateImages(post.id);
        showSlide(post.currentSlide, post.id)
        showSlide(post.currentSlide, post.id)
    })

    // checkPostTextLength()
}

function checkPostTextLength() {
    listPost.forEach(post => {
        if (document.getElementById("postText-" + post.id).style.height < "3.6em") {
            document.getElementById("postLink-" + post.id).innerText = ''
        }
    })
}

function renderPostItem(post) {
    let postItem = ''
    postItem +=
        ` <div class="post">
        <div class="post-heading">
            <div class="info-action">
                <div class="user-info">
                    <img class="post-avatar" src="${userList[post.userid - 1].avatar}" alt="">
                    <div class="name-time">
                        <div class="post-name">${userList[post.userid - 1].username}</div>
                        <div class="post-time">${post.time} minutes ago</div>
                    </div>
                </div>
                <img class="post-action-button" src="./assets/Button Action.svg" alt="">
                <img class="post-action-button" src="./assets/Button Action (1).svg" alt="">
                <img class="post-action-button" src="./assets/Button Action (2).svg" alt="">
            </div>
            <p id="postText-${post.id}" class="post-text-shortened">${post.content}</p>
            <p id="postLink-${post.id}" onclick="handleViewMore(${post.id})" class="post-link">View more..</p>
        </div>
        <div id="postImgContainer-${post.id}" class="post-img-container">
            <div class="list-imgs" id="listImgs-${post.id}">

            </div>
        </div>
        
        <div class="post-action">
            <div class="post-add-action">
                <img class="post-reaction-button" src="./assets/smile.svg" alt="">
                <div class="post-comment-reaction-count-textstyle">
                ${post.reactions} ${post.reactions > 1 ? "Reactions" : "Reaction"}
                </div>
            </div>
            <div class="post-add-action">
                <img class="post-reaction-button" src="./assets/comment-alt-post.svg" alt="">
                <div class="post-comment-reaction-count-textstyle">
                ${post.comments.length} ${post.comments.length > 1 ? "Comments" : "Comment"}
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

function generateImages(postId) {
    let txts = ''
    listPost[postId - 1].img.forEach(
        imgs => {
            txts += `
            <div class="slide" id="slide-${postId}">
                <img class="post-img" src="${imgs}" alt="">
            </div>
            `
        }
    )
    txts = `
    <div class="slide" id="slide-${postId}">
        <img class="post-img" src="${listPost[postId - 1].img[listPost[postId - 1].img.length - 1]}" alt="">
    </div>` + txts
    txts += `<div class="slide" id="slide-${postId}">
    <img class="post-img" src="${listPost[postId - 1].img[0]}" alt="">
    </div>`
    container = document.getElementById("postImgContainer-" + postId)
    // listImgs = document.querySelector(".list-imgs")
    listImgs = document.getElementById("listImgs-" + postId)
    listImgs.innerHTML += txts
    container.innerHTML += `
    <img onclick="nextSlide(${postId})" class="next" src="./assets/imgMoveRight.png" alt="">
    <img onclick="prevSlide(${postId})" class="prev" src="./assets/imgMoveLeft.png" alt="">
    <div onmouseleave="deleteSlidesDotSlider(${postId});" onmouseenter="addSlidesDotSlider(${postId});" class="post-dotslider" id="dotSlider-${postId}"></div>
    `
    var dots = ''
    for (let i = 0; i < listPost[postId - 1].img.length; i++) {
        dots += `
    <img onclick="handleDotClick(${postId},${i + 1})" class="post-dot" id="postDot-${postId}-${i}" src="./assets/circle.png" alt="">
        `
    }
    var postDotSlider = document.getElementById("dotSlider-" + postId)
    postDotSlider.innerHTML += dots;
}

function handleTransitionEnd(postId, currentSlide) {
    let slidesList = document.getElementById("listImgs-" + postId)
    if (listPost[postId-1].currentSlide == slidesList.children.length - 1) {
        console.log("reached end img condition in handleTransitionEnd");
        slidesList.style.transition = `none`
        slidesList.style.transform = `translateX(-620.99px)`;
        listPost[postId - 1].currentSlide = 1;
        listPost[postId - 1].imgEndFlag = true;
        showSlide(listPost[postId - 1].currentSlide, postId)
        console.log("executed transition end - end");
    }
    else if(listPost[postId-1].dotSliderFlagSecondCondt){
        console.log("reached dotSliderFlagSecondCondt handleTransitionEnd");
        listPost[postId-1].dotSliderFlagSecondCondt = false
        slidesList.style.transition = `none`
        slidesList.style.transform = `translateX(${(listPost[postId-1].currentSlide - (listPost[postId-1].img.length)) * 620.99}px)`;
        listPost[postId-1].currentSlide = listPost[postId-1].dotSliderTarget + (slidesList.children.length-(listPost[postId-1].img.length + 2))

    }
    else if (listPost[postId-1].currentSlide == 0) {
        console.log("reached start img condition in handleTransitionEnd");
        slidesList.style.transition = `none`
        slidesList.style.transform = `translateX(-${(slidesList.children.length - 2) * 620.99}px)`;
        listPost[postId - 1].currentSlide = slidesList.children.length - 2;
        listPost[postId - 1].imgStartFlag = true;
        showSlide(listPost[postId - 1].currentSlide, postId)
        console.log("executed transition end - start");
    }
    var postDotSlider = document.getElementById("dotSlider-" + postId)
    for (let index = 0; index < listPost[0].img.length; index++) {
        if (index == listPost[postId - 1].currentSlide - 1 -(slidesList.children.length-2-listPost[postId-1].img.length) || index == listPost[0].img.length) {
            continue;
        }
        else {
            postDotSlider.children[index].style.opacity = "0.4"
        }
    }

    // postDotSlider.children[currentSlide-2].style.opacity = "0.4"
}

function showSlide(index, postId) {
    console.log("showSlide currentSlide: " + listPost[postId-1].currentSlide);
    let slidesList = document.getElementById("listImgs-" + postId)
    let postDotSlider = document.getElementById("dotSlider-" + postId)
    if (listPost[postId - 1].dotSliderFlagFirstCondt == true) {
        slidesList.style.transition = `transform 1s ease`;
        listPost[postId - 1].currentSlide = index + ((slidesList.children.length-2)-listPost[postId-1].img.length);
        listPost[postId - 1].dotSliderFlagFirstCondt = false;
    }
    if (listPost[postId - 1].imgEndFlag == true) {
        listPost[postId - 1].imgEndFlag = false;
        listPost[postId - 1].currentSlide = 1;
        slidesList.style.transform = `translateX(-${listPost[postId - 1].currentSlide * 620.99}px)`;
        console.log("went through condition imgEndFlag == true");
    }
    else if (listPost[postId - 1].imgStartFlag == true) {
        listPost[postId - 1].imgStartFlag = false;
        listPost[postId - 1].currentSlide = slidesList.children.length - 2
        slidesList.style.transform = `translateX(-${listPost[postId - 1].currentSlide * 620.99}px)`;
        console.log("went through condition imgStartFlag == true");
    }
    else if (listPost[postId -1].currentSlide < goLeftLesser || listPost[postId -1].currentSlide < goRightLarger) {
        console.log("showSlide-goLeftLesser");
        slidesList.style.transform = `translateX(-${(listPost[postId - 1].currentSlide+1) * 620.99}px)`;
        listPost[postId-1].currentSlide += 1
        // goLeftLesser = null;
    }
    else{
        console.log("showSlide-default");
        slidesList.style.transform = `translateX(-${listPost[postId - 1].currentSlide * 620.99}px)`;
    }
    // else if (listPost[postId-1].currentSlide < index) {
    //     // slidesList.style.transition = `transform 1s ease`
    //     console.log("showSlide-right");
    //     slidesList.style.transform = `translateX(-${listPost[postId - 1].currentSlide * 620.99}px)`;
    // }
    // else if (listPost[postId-1].currentSlide > index){
    //     console.log("showSlide-left");
    //     slidesList.style.transform = `translateX(${listPost[postId-1].currentSlide * 620.99}px)`;
    // }
    // console.log("showSlide() index: " + index + ", currentSlide: " + currentSlide1);
    console.log("goLeftLesser: " + goLeftLesser);
    if (listPost[postId - 1].img.length + 1 > index && index > 0 && goLeftLesser == undefined) {
        // console.log("INDEX: " + index);
        postDotSlider.children[listPost[postId - 1].currentSlide - 1].style.opacity = "1"
    }
    else if (goLeftLesser || goRightLarger) {
        goLeftLesser = undefined;
        goRightLarger = undefined;
        postDotSlider.children[listPost[postId - 1].currentSlide - 2].style.opacity = "1"
    }
}

function nextSlide(postId) {
    let slidesList = document.getElementById("listImgs-" + postId)
    // console.log("nextSlide currentSlide: " + currentSlide);
    slidesList.style.transition = `transform 1s ease`;
    listPost[postId - 1].currentSlide += 1;
    showSlide(listPost[postId - 1].currentSlide, postId)
    slidesList.addEventListener("transitionend", (event) => {
        console.log("handleTransitionEnd() went through in nextSlide");
        handleTransitionEnd(postId, listPost[postId - 1].currentSlide);
    });
}

function prevSlide(postId) {
    let slidesList = document.getElementById("listImgs-" + postId)
    slidesList.style.transition = `transform 1s ease`;
    listPost[postId - 1].currentSlide -= 1
    console.log("prevSlide currentSlide: " + listPost[postId-1].currentSlide);
    showSlide(listPost[postId - 1].currentSlide, postId);
    slidesList.addEventListener("transitionend", (event) => {
        console.log("handleTransitionEnd() went through in prevSlide");
        handleTransitionEnd(postId, listPost[postId - 1].currentSlide);
    });
}

function handleDotClick(postId, targetSlide) {
    dotSliderClick = true;
    listPost[postId-1].dotSliderTarget = targetSlide
    let slidesList = document.getElementById("listImgs-" + postId)
    let dotSlider = document.getElementById("dotSlider-" + postId)
    slidesList.style.transition = `transform 1s ease`;
    // listPost[postId - 1].currentSlide = targetSlide;
    // showSlide(listPost[postId - 1].currentSlide, postId);
    slidesList.addEventListener("transitionend", (event) => {
        console.log("handleTransitionEnd() went through in prevSlide");
        handleTransitionEnd(postId, listPost[postId - 1].currentSlide);
        // handleDotSliderTransition(postId,targetSlide)
    });
    // dotSlider.addEventListener("click", (event) => {
    //     console.log("dotSlider eventListener went through");
    //     handleDotClicker(postId, listPost[postId - 1].currentSlide, targetSlide)
    // });
    if (targetSlide < listPost[postId - 1].currentSlide) {
        if ((listPost[postId - 1].currentSlide - targetSlide) > (slidesList.children.length - (listPost[postId - 1].currentSlide - targetSlide))) {
            //GO RIGHT
            slidesList.style.transition = `none`
            slidesList.style.transform = `translateX(${(listPost[postId-1].currentSlide - (listPost[postId-1].img.length)) * 620.99}px)`;
            listPost[postId - 1].dotSliderFlagFirstCondt = true;
            // showSlide((listPost[postId - 1].currentSlide - (listPost[postId - 1].img.length)), postId)
            setTimeout(() =>{showSlide(targetSlide,postId)}, 0);
        } else {
            //GO LEFT
            // slidesList.style.transform = `translateX(${(listPost[postId].currentSlide - (targetSlide+(slidesList.children.length-(listPost[postId-1].img.length+1)))) * 620.99}px)`;
            listPost[postId-1].currentSlide = targetSlide;
            console.log(targetSlide+slidesList.children.length-listPost[postId-1].img.length-2);
            goLeftLesser = targetSlide+slidesList.children.length-listPost[postId-1].img.length-2  
            showSlide(targetSlide,postId)
            // slidesList.style.transform = `translateX(${targetSlide * 620.99}px)`;
        }
    }
    else if (targetSlide > listPost[postId - 1].currentSlide-1) {
        if ((targetSlide - (listPost[postId - 1].currentSlide-(slidesList.children.length-(listPost[postId-1].img.length+2)))) > listPost[postId-1].img.length-targetSlide) {
            //GO LEFT (slidesList.children.length - (targetSlide - (listPost[postId - 1].currentSlide-(slidesList.children.length-(listPost[postId-1].img.length+2)))))
            console.log("GO LEFT LARGER " + listPost[postId-1].currentSlide);
            console.log("targetSlide: " + targetSlide);
            console.log(listPost[postId - 1].currentSlide-(slidesList.children.length-(listPost[postId-1].img.length-2)));
            listPost[postId-1].currentSlide -= listPost[postId-1].img.length - targetSlide + 1
            console.log("currentSlide GO LEFT LARGER" + listPost[postId-1].currentSlide);
            listPost[postId-1].dotSliderFlagSecondCondt = true;
            showSlide(targetSlide,postId)
            // setTimeout(() => {
            //     slidesList.style.transition = `none`
            //     slidesList.style.transform = `translateX(${(listPost[postId-1].currentSlide - (listPost[postId-1].img.length)) * 620.99}px)`;
            // },0);
            
            listPost[postId - 1].dotSliderFlagSecondCondt = true;
        } else {
            //GO RIGHT
            listPost[postId-1].currentSlide = targetSlide;
            // console.log(targetSlide+slidesList.children.length-listPost[postId-1].img.length-2);
            goLeftLesser = targetSlide+slidesList.children.length-listPost[postId-1].img.length
            showSlide(targetSlide,postId)
        }
    }
}

function handleDotClicker(postId, currentSlide, targetSlide) {
    slidesList.style.transition = `none`
    slidesList.style.transform = `translateX(${(listPost[postId - 1].currentSlide - (listPost[postId - 1].img.length)) * 620.99}px)`;
}

function handleDotSliderTransition(postId, targetSlide) {
    console.log("IN AGAIN");
    showSlide(targetSlide, postId)
}

function addSlidesDotSlider(postId) {
    let slidesList = document.getElementById("listImgs-" + postId)
    if (slidesList.children.length == listPost[postId - 1].img.length + 2) {
        console.log("Running");
        let leftTxts = ''
        let rightTxts = ''
        let index = 1;
        listPost[postId - 1].img.forEach(
            imgs => {
                if ((listPost[postId - 1].img.length) > index && index > (Math.floor(listPost[postId - 1].img.length / 2)) + 1) {
                    leftTxts += (`
                <div class="slide" id="slide-${postId}">
                    <img class="post-img" src="${imgs}" alt="">
                </div>
                ` + leftTxts);
                }
                else if (Math.floor((listPost[postId - 1].img.length / 2) + 1) > index && index > 1) {
                    rightTxts += `
                <div class="slide" id="slide-${postId}">
                    <img class="post-img" src="${imgs}" alt="">
                </div>
                `
                }
                index += 1
            }
        )
        listPost[postId - 1].currentSlide += (Math.floor(listPost[postId - 1].img.length / 2)) - 1;
        console.log("leftTxts: " + leftTxts);
        // console.log("rightTxts: " + rightTxts);
        slidesList.innerHTML = leftTxts + slidesList.innerHTML
        // slidesList.innerHTML += rightTxts
        // listPost[postId-1].currentSlide += 
        // showSlide(listPost[postId - 1].currentSlide,postId)
        slidesList.style.transition = `none`;
        slidesList.style.transform = `translateX(-${listPost[postId - 1].currentSlide * 620.99}px)`;
        console.log("CURRENTSLIDE AFTER: " + listPost[postId - 1].currentSlide);
    }
    else {
        console.log("Not Running");
    }
}

function deleteSlidesDotSlider(postId) {
    console.log("DELETED EXTRA IMAGES");
    console.log("deleteSlides currentSlide: " + listPost[postId-1].currentSlide);
    let slidesList = document.getElementById("listImgs-" + postId)
    for (let index = 0; index < slidesList.children.length - listPost[postId - 1].img.length - 2; index++) {
        slidesList.removeChild(slidesList.firstElementChild)
    }
    listPost[postId - 1].currentSlide -= ((Math.floor(listPost[postId - 1].img.length / 2)) - 1);
    console.log("deleteSlides currentSlide AFTER CHANGE: " + listPost[postId-1].currentSlide);
    slidesList.style.transition = `none`;
    slidesList.style.transform = `translateX(-${listPost[postId - 1].currentSlide * 620.99}px)`;
    // setTimeout(() => {
    //     showSlide(listPost[postId-1].currentSlide,postId)
    // },0)
}

function handleViewMore(postId) {
    const element = document.getElementById("postText-" + postId)
    element.classList.toggle("post-text-shortened");
    element.classList.toggle("post-text-full")
    textInside = document.getElementById("postLink-" + postId).innerText
    if (textInside == "View more..") {
        document.getElementById("postLink-" + postId).innerText = "See less";
    }
    else {
        document.getElementById("postLink-" + postId).innerText = "View more..";
    }
    renderPosts();
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
            commentsBlock.innerHTML = commentItem;
        })
    }
    )
}

function renderCommentItem(comment) {
    if (userList[comment.userid - 1].user) {
        return `
            <div id="postComment-${comment.postid}-${comment.id}" class="post-comment" 
            >
              <img class="comment-avatar" src="${userList[comment.userid - 1].avatar}" alt="">
              <div>
                <div class="comment-info">
                  <div class="post-name">${userList[comment.userid - 1].username}</div>
                  <div class="comment-time">${comment.isedited ? comment.time + " minutes ago (edited)" : comment.time + " minutes ago"}</div>
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
    else {
        return `
        <div id="postComment-${comment.postid}-${comment.id}" class="post-comment" 
        >
          <img class="comment-avatar" src="${userList[comment.userid - 1].avatar}" alt="">
          <div>
            <div class="comment-info">
              <div class="post-name">${userList[comment.userid - 1].username}</div>
              <div class="comment-time">${comment.isedited ? comment.time + " minutes ago (edited)" : comment.time + " minutes ago"}</div>
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
            userid: 1,
            user: true,
            time: 0,
            content: val
        })
    clearText("commentInput-" + listPost[id - 1].id)
    renderComments();
    renderPosts();
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
    listPost[postId - 1].comments[commentId - 1].isedited = true;
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

// let currentSlide = 1;

function renderApp() {
    renderHeader2();
    renderSideBar();
    renderPosts();
    renderComments();

}

renderApp()

var slides = document.querySelectorAll(".slide");

const slidesList = document.querySelector(".list-imgs")