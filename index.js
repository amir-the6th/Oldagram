const posts = [
    {
        id: 1,
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        avatarAlt: "an avatar portrait of the man himslef Vincent Van Gogh",
        post: "images/post-vangogh.jpg",
        postAlt: "a portrait of Vincent Van Gogh",
        comment: "just took a few mushrooms lol",
        likes: 2100
    },
    {
        id: 2,
        name: "Amir Sabagh",
        username: "arsenicolos",
        location: "Toronto, Canada",
        avatar: "images/avatar-amir.jpg",
        avatarAlt: "an avatar portrait of the man himslef Amir Sabagh",
        post: "images/post-amir.png",
        postAlt: "a portrait of Amir Sabagh",
        comment: "You seem to be a likeable person. Let's make friends!",
        likes: 1
    },
    {
        id: 3,
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        avatarAlt: "an avatar portrait of the man himslef Gustave Courbet",
        post: "images/post-courbet.jpg",
        postAlt: "a portrait of Gustave Courbet",
        comment: "i'm feelin a bit stressed tbh",
        likes: 466
    },
    {
        id: 4,
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

//Elements for populating the posts
const template = document.querySelector('#template');
const clone = template.content.cloneNode(true);
const postEl = clone.querySelector('.post');
const postsWrapperEl = document.querySelector('.posts-wrapper');

//Keep count of the num of posts - useful for creating unique id for posts and elements for their buttons
let LikesBtnsElements = []; //this array will be used in a for loop to dynamically generate variable names for the like btn elemens
let liked = false; //indicate whether the like button has been clicked

//Populate posts in the HTML structure
posts.forEach(p => {
    //create a clone of the post element
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
    newClone.querySelector('.likes-number').textContent = localStorage.getItem(`post-${p.id}-likes`) + " Likes"; //get the current like num from localStorage
    newClone.querySelector('.comment-message').textContent = p.comment;
    newClone.querySelector('.comment-username').setAttribute('href', `https://instagram.com/${p.username}`);
    newClone.querySelector('.comment-username').textContent = p.username;

    //add unique id for like, comment, and share buttons
    newClone.querySelector('.like-btn').setAttribute('id', `like-btn-${p.id}`);
    newClone.querySelector('.comment-btn').setAttribute('id', `comment-btn-${p.id}`);
    newClone.querySelector('.share-btn').setAttribute('id', `share-btn-${p.id}`);
    //add unique id for the number of likes elements
    newClone.querySelector('.likes-number').setAttribute('id', `likes-number-${p.id}`);

    //Append the populated post to HTML
    postsWrapperEl.append(newClone);
});

posts.forEach(p => {
    //generate dynamic Like button elements based on the number of posts
    this['LikeBtn'+p.id] = document.querySelector('#like-btn-'+p.id);
    
    //set the like icon based on the liked status in localStorage
    let likeButtonIconSrc = "";
    if(localStorage.getItem(`post-${p.id}-liked`) === "true")
        likeButtonIconSrc = "images/icon-red-heart.png";
    else
        likeButtonIconSrc = "images/icon-heart.png";

    this['LikeBtn'+p.id].setAttribute('src', likeButtonIconSrc);


    //Add event listeners for clicks on like buttons
    this['LikeBtn'+p.id].addEventListener('click', () => {
        if(liked == true) {
            //set the liked status in localStorage to false
            localStorage.setItem(`post-${p.id}-liked`, false);
            //change the like button color to red
            this['LikeBtn'+p.id].setAttribute('src', "images/icon-heart.png");
            //set liked state to false
            liked = false;
            //set the localStorage to save the likes num
            localStorage.setItem(`post-${p.id}-likes`, --p.likes);
            //display the number of likes in the page
            document.querySelector('#likes-number-'+p.id).textContent =  `${p.likes} Likes`;
        }
        else {
            //set the liked status in localStorage to true            
            localStorage.setItem(`post-${p.id}-liked`, true);
            //change the like button color to default
            this['LikeBtn'+p.id].setAttribute('src', "images/icon-red-heart.png");
            //set liked state to true
            liked = true;
            //set the localStorage to save the likes num
            localStorage.setItem(`post-${p.id}-likes`, ++p.likes);            
            //display the number of likes in the page
            document.querySelector('#likes-number-'+p.id).textContent = `${p.likes} Likes`;
        }
    });
    //No need for comment and share elements. Maybe I implement something in the future updates. 
    //this['CommentBtn'+i] = document.querySelector('#comment-btn-'+i);
    //this['ShareBtn'+i] = document.querySelector('#share-btn-'+i);
});

