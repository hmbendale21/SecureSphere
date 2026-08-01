/* ==========================================
      SecureSphere Cyber News
========================================== */

const newsContainer =
    document.getElementById("newsContainer");
const refreshBtn =
    document.getElementById("refreshBtn");

const searchInput =
    document.getElementById("searchInput");

let allArticles = [];
const categoryContainer =
    document.getElementById("categoryButtons");

async function loadNews() {

    const newsData =
        await fetchNewsData();

    const gNews =
        await fetchGNews();

    allArticles = [

        ...newsData,

        ...gNews

    ];

    displayAllArticles(allArticles);

    createCategoryButtons();

    updateBreakingNews();

    updateStatistics();
    
    updateLastRefresh();

    console.log("News Updated Successfully");
    console.log("NewsData:", newsData);

    console.log("GNews:", gNews);

    console.log("All Articles:", allArticles);

    console.table(
        allArticles.map(article => ({
            Title: article.title,
            Category: article.category
        }))
    );
}

function displayAllArticles(articles) {

    if (articles.length === 0) {

        newsContainer.innerHTML = `
    
            <div class="col-12 text-center py-5">
    
                <i class="bi bi-search fs-1 text-info"></i>
    
                <h3 class="mt-3">
    
                    No Articles Found
    
                </h3>
    
                <p>
    
                    Try another keyword.
    
                </p>
    
            </div>
    
        `;

        return;

    }

    let html = "";

    articles.forEach(article => {

        const card = `

        <div class="col-lg-6">

            <div class="news-card">

                <img
                    src="${article.image || 'https://placehold.co/600x350?text=SecureSphere'}"
                    class="img-fluid"
                    alt="News Image">

                <div class="news-body">

                    <span class="news-category ${getCategoryClass(article.category)}">

                        ${article.category || "Cyber Security"}

                    </span>

                    <h3 class="news-title">

                        ${article.title || "No Title"}

                    </h3>

                    <small class="author">

                        👤 ${article.author || "Unknown Author"}

                    </small>

                    <p class="news-desc">

                        ${article.description
                ? article.description.substring(0, 180) + "..."
                : "No description available."
            }

                    </p>

                    <div class="news-footer">

                        <div>

                            <small class="source">

                                📰 ${article.source || "Unknown Source"}

                            </small>

                            <br>

                            <small class="publish-date">

                                🕒 ${article.publishedAt || "Unknown Date"}

                            </small>

                        </div>

                        <a
                            href="${article.url}"
                            target="_blank"
                            class="read-btn">

                            Read More

                        </a>

                    </div>

                </div>

            </div>

        </div>

        `;

        html += card;

    });

    newsContainer.innerHTML = html;

}


function getCategoryClass(category) {

    if (!category)
        return "technology";

    const value =
        category.toLowerCase();

    if (value.includes("malware"))
        return "malware";

    if (value.includes("ransom"))
        return "ransomware";

    if (value.includes("phishing"))
        return "phishing";

    if (value.includes("ai"))
        return "ai";

    return "technology";

}
loadNews();

if (refreshBtn) {

    refreshBtn.addEventListener("click", async () => {

        refreshBtn.disabled = true;

        refreshBtn.innerHTML = `
        <i class="bi bi-arrow-repeat"></i>
        Refreshing...
        `;

        await loadNews();

        refreshBtn.disabled = false;

        refreshBtn.innerHTML = `
        <i class="bi bi-arrow-clockwise"></i>
        Refresh
        `;

    });

}

/* ==========================================
      Auto Refresh Every 10 Minutes
========================================== */

setInterval(async () => {

    console.log("Auto Refreshing News...");

    await loadNews();

}, 600000);

function updateLastRefresh() {

    const updateTime =
        document.getElementById("updateTime");

    if (updateTime) {

        updateTime.textContent =
            new Date().toLocaleTimeString();

    }

}

/* ==========================================
      Live Search
========================================== */

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const keyword = this.value.toLowerCase().trim();

        if (keyword === "") {

            displayAllArticles(allArticles);

            return;

        }

        const filteredArticles = allArticles.filter(article => {

            const title =
                (article.title || "").toLowerCase();

            const description =
                (article.description || "").toLowerCase();

            const source =
                (article.source || "").toLowerCase();

            const category =
                (article.category || "").toLowerCase();

            return (

                title.includes(keyword) ||

                description.includes(keyword) ||

                source.includes(keyword) ||

                category.includes(keyword)

            );

        });

        displayAllArticles(filteredArticles);

    });

}

/* ==========================================
      Dynamic Categories
========================================== */

function createCategoryButtons() {

    const categories = [
        "All",
        ...new Set(
            allArticles.map(article => article.category)
        )
    ];

    categoryContainer.innerHTML = "";

    categories.forEach(category => {

        const button = document.createElement("button");

        button.className = "btn category-btn";

        if (category === "All")
            button.classList.add("active");

        button.textContent = category;

        button.dataset.category = category.toLowerCase();

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".category-btn")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            if (category === "All") {

                displayAllArticles(allArticles);

                return;

            }

            const filtered =
                allArticles.filter(article =>
                    article.category.toLowerCase() === category.toLowerCase()
                );

            displayAllArticles(filtered);

        });

        categoryContainer.appendChild(button);

    });

}

/* ==========================================
      Breaking News
========================================== */

function updateBreakingNews() {

    const ticker =
        document.getElementById("breakingTicker");

    if (!ticker)
        return;

    const headlines =
        allArticles
            .slice(0, 10)
            .map(article => article.title);

    ticker.innerHTML =
        headlines
            .map(title => `📰 ${title}`)
            .join(" &nbsp;&nbsp;&nbsp; 🔹 &nbsp;&nbsp;&nbsp; ");

}

/* ==========================================
      Dashboard Statistics
========================================== */

function updateStatistics() {

    const articleCount =
        document.getElementById("articleCount");

    const criticalCount =
        document.getElementById("criticalCount");

    const breachCount =
        document.getElementById("breachCount");

    if(articleCount)
        articleCount.textContent =
            allArticles.length;

    let critical = 0;

    let breach = 0;

    allArticles.forEach(article=>{

        const text = (

            article.title +

            " " +

            article.description

        ).toLowerCase();

        if(

            text.includes("critical") ||

            text.includes("zero-day") ||

            text.includes("emergency")

        ){

            critical++;

        }

        if(

            text.includes("breach") ||

            text.includes("data leak") ||

            text.includes("database")

        ){

            breach++;

        }

    });

    if(criticalCount)
        criticalCount.textContent =
            critical;

    if(breachCount)
        breachCount.textContent =
            breach;

}