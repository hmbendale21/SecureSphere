const container =
document.getElementById("bookmarkContainer");

let bookmarks = JSON.parse(

localStorage.getItem("bookmarks")

) || [];

displayBookmarks();

function displayBookmarks(){

if(bookmarks.length===0){

container.innerHTML=`

<div class="col-12">

<div class="alert alert-info text-center">

<h3>

No Bookmarks Yet

</h3>

<p>

Save articles from Cyber News.

</p>

</div>

</div>

`;

return;

}

let html="";

bookmarks.forEach((article,index)=>{

html+=`

<div class="col-lg-6">

<div class="news-card">

<img src="${article.image}"

onerror="this.src='https://placehold.co/600x350/161b22/58a6ff?text=SecureSphere'">

<div class="news-body">

<span class="news-category">

${article.category}

</span>

<h4 class="news-title">

${article.title}

</h4>

<p class="news-desc">

${article.description}

</p>

<div class="news-footer">

<div>

<small class="source">

${article.source}

</small>

<br>

<small class="publish-date">

${article.publishedAt}

</small>

</div>

<div>

<a

href="${article.url}"

target="_blank"

class="read-btn">

Read More

</a>

<button

class="btn btn-danger"

onclick="removeBookmark(${index})">

<i class="bi bi-trash"></i>

</button>

</div>

</div>

</div>

</div>

</div>

`;

});

container.innerHTML=html;

}

function removeBookmark(index){

bookmarks.splice(index,1);

localStorage.setItem(

"bookmarks",

JSON.stringify(bookmarks)

);

displayBookmarks();

}