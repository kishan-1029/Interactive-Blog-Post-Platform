// scripts.js
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        addPost(title, content);
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    }
});

function addPost(title, content) {
    const postsContainer = document.getElementById('posts-container');

    const postElement = document.createElement('div');
    postElement.classList.add('post');
    
    const postTitle = document.createElement('h3');
    postTitle.textContent = title;

    const postContent = document.createElement('p');
    postContent.textContent = content;

    postElement.appendChild(postTitle);
    postElement.appendChild(postContent);

    postsContainer.appendChild(postElement);
}
