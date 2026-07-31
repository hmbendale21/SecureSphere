/* ==========================================
      SecureSphere Cyber News
========================================== */

const newsContainer =
    document.getElementById("newsContainer");
const refreshBtn =
    document.getElementById("refreshBtn");

async function loadNews() {

    const newsData =
        await fetchNewsData();

    const gNews =
        await fetchGNews();

    const articles = [

        ...newsData,

        ...gNews

    ];

    displayAllArticles(articles);

    updateLastRefresh();

    console.log("News Updated Successfully");

}

function displayAllArticles(articles) {

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

                        ${
                            article.description
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