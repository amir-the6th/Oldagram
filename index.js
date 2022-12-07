const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        avatarAlt: "an avatar portrait of the man himslef Vincent Van Gogh",
        post: "images/post-vangogh.jpg",
        postAlt: "a portrait of Vincent Van Gogh",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        avatarAlt: "an avatar portrait of the man himslef Gustave Courbet",
        post: "images/post-courbet.jpg",
        postAlt: "a portrait of Gustave Courbet",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        avatarAlt: "an avatar portrait of the man himslef Joseph Ducreux",
        post: "images/post-ducreux.jpg",
        postAlt: "a portrait of Joseph Ducreux",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postTemplate = `
    <section class="post">
        <div class="post-author-container">
            <img class="avatar-img" id="avatar-img" src="images/avatar-courbet.jpg" alt="avatar image of the post author">
            <div class="author-info">
                <h4 class="avatar-name" id="author-name">Marcus Alonso</h4>
                <p class="post-location" id="post-location">Bali, Indonesia</p>
            </div>
        </div>
        <div class="post-img-container">
            <img class="post-img" id="post-img" src="images/post-vangogh.jpg" alt="post image">
        </div>
        <div class="post-info">
            <div class="share-box">
                <img class="like-btn" src="images/icon-heart.png" alt="like button">
                <img class="comment-btn" src="images/icon-comment.png" alt="comment button">
                <img class="share-btn" src="images/icon-dm.png" alt="share button">
            </div>
            <div class="likes-num-box">
                <p class="likes-number" id="likes-number">666 Likes</p>
            </div>
            <div class="comments-box">
                <p class="comment"> <a href="" id="comment-username">googoolTala</a> Your work is Amazing</p>
            </div>
        </div>
    </section>
`
const template = document.querySelector('#template');
const clone = template.content.cloneNode(true);
const postEl = clone.querySelector('.post');

const postsWrapperEl = document.querySelector('.posts-wrapper');

posts.forEach(p => {
    let newClone = postEl.cloneNode(true);

    //avatar image, alt description, post name, and location
    newClone.querySelector('.avatar-img').setAttribute('src', p.avatar);
    newClone.querySelector('.avatar-img').setAttribute('alt', p.avatarAlt);
    newClone.querySelector('.post-name').textContent = p.name;
    newClone.querySelector('.post-location').textContent = p.location;

    //post image, alt description
    newClone.querySelector('.post-img').setAttribute('src', p.post);
    newClone.querySelector('.post-img').setAttribute('alt', p.postAlt);

    //likes number, comment author, and the comment message
    newClone.querySelector('.likes-number').textContent = `${p.likes} Likes`;
    newClone.querySelector('.comment-message').textContent = p.comment;
    newClone.querySelector('.comment-username').setAttribute('href', `https://instagram.com/${p.username}`);
    newClone.querySelector('.comment-username').textContent = p.username;


    postsWrapperEl.append(newClone);
  })

const mainEl = document.querySelector("#main");
const authorName = document.querySelector("author-name");
const postLocation = document.getElementById("post-location");
const avatarImg = document.getElementById("avatar-img");
const postImg = document.getElementById("post-img");
const likesNumber = document.getElementById("likes-number");
const comment = document.getElementById("comment");
const commentUsername = document.getElementById("comment-username");

posts.forEach(post => {
    //mainEl.innerHTML += postTemplate;
    //authorName.innerHTML = `${posts[i].name}`;
});
