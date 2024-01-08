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

function renderApp() {
    renderHeader2()
    // render ...
}

renderApp()
