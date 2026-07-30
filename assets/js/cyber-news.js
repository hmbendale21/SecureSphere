const API_KEY = "pub_b850c16b2e894d66a5301647c84e668f";

const URL =
    `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=technology&language=en&q=cybersecurity`;

const newsContainer = document.getElementById("newsContainer");

const breakingText = document.getElementById("breakingText");

const searchInput = document.getElementById("searchInput");

let articles = [];

function showLoading() {

    newsContainer.innerHTML = `
    
    <div class="text-center py-5">
    
    <div class="spinner-border text-info"></div>
    
    <p class="mt-3">
    Loading Cyber News...
    </p>
    
    </div>
    
    `;

}

async function loadNews() {

    showLoading();

    try {

        const response = await fetch(URL);

        const data = await response.json();

        articles = data.results || [];

        displayNews(articles);

        updateStats();

        updateBreaking();

        updateTrending();

    }

    catch (error) {

        newsContainer.innerHTML = `
        
        <div class="alert alert-danger">
        
        Unable to load cyber news.
        
        </div>
        
        `;

    }

}

loadNews();

function displayNews(news) {

    newsContainer.innerHTML = "";

    news.forEach(article => {

        const card = `
    
    <div class="col-lg-6">
    
    <div class="news-card">
    
    <img src="${article.image_url || 'https://placehold.co/600x400'}">
    
    <div class="news-body">
    
    <span class="news-category">
    
    ${article.category || "Cyber"}
    
    </span>
    
    <h4 class="news-title">
    
    ${article.title}
    
    </h4>
    
    <p class="news-desc">
    
    ${article.description ?
                article.description.substring(0, 120)
                :
                "No description available."}
    
    ...
    
    </p>
    
    <div class="news-footer">
    
    <small>
    
    ${article.source_id}
    
    </small>
    
    <a href="${article.link}"
    
    target="_blank"
    
    class="read-btn">
    
    Read More
    
    </a>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    `;

        newsContainer.innerHTML += card;

    });

}

function updateStats() {

    document.getElementById("articleCount").textContent =

        articles.length;

    document.getElementById("criticalCount").textContent =

        articles.filter(a =>

            a.title.toLowerCase().includes("critical")

        ).length;

    document.getElementById("breachCount").textContent =

        articles.filter(a =>

            a.title.toLowerCase().includes("breach")

        ).length;

    document.getElementById("updateTime").textContent =

        new Date().toLocaleTimeString();

}

function updateBreaking() {

    if (articles.length) {

        breakingText.textContent =

            articles[0].title;

    }

}

function updateTrending() {

    const list = document.getElementById("trendingTopics");

    list.innerHTML = "";

    const keywords = [

        "Ransomware",

        "Phishing",

        "Zero-Day",

        "Microsoft",

        "Linux",

        "AI",

        "Malware",

        "CVE"

    ];

    keywords.forEach(topic => {

        list.innerHTML += `
    
    <li>
    
    <i class="bi bi-fire text-danger"></i>
    
    ${topic}
    
    </li>
    
    `;

    });

}

searchInput.addEventListener("input",()=>{

    const value=
    
    searchInput.value.toLowerCase();
    
    const filtered=
    
    articles.filter(article=>
    
    article.title.toLowerCase().includes(value)
    
    ||
    
    (article.description||"")
    
    .toLowerCase()
    
    .includes(value)
    
    );
    
    displayNews(filtered);
    
    });