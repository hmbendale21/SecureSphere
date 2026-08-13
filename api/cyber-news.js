export default async function handler(req, res) {
    // Allow only GET requests
    if (req.method !== "GET") {
        return res.status(405).json({
            success: false,
            error: "Method not allowed"
        });
    }

    try {
        const NEWSDATA_API_KEY =
            process.env.NEWSDATA_API_KEY;

        const GNEWS_API_KEY =
            process.env.GNEWS_API_KEY;

        if (!NEWSDATA_API_KEY && !GNEWS_API_KEY) {
            return res.status(500).json({
                success: false,
                error: "News API keys are not configured"
            });
        }

        const requests = [];

        /* ==========================================
           NewsData
        ========================================== */

        if (NEWSDATA_API_KEY) {
            const newsDataUrl =
                new URL(
                    "https://newsdata.io/api/1/news"
                );

            newsDataUrl.searchParams.set(
                "apikey",
                NEWSDATA_API_KEY
            );

            newsDataUrl.searchParams.set(
                "q",
                "cybersecurity"
            );

            newsDataUrl.searchParams.set(
                "language",
                "en"
            );

            requests.push(
                fetch(newsDataUrl)
                    .then(async response => {

                        if (!response.ok) {
                            throw new Error(
                                `NewsData HTTP ${response.status}`
                            );
                        }

                        const data =
                            await response.json();

                        return (
                            data.results || []
                        ).map(article => ({
                            title:
                                article.title ||
                                "Cybersecurity News",

                            description:
                                article.description ||
                                "No description available.",

                            image:
                                article.image_url ||
                                "",

                            url:
                                article.link ||
                                "#",

                            source:
                                article.source_id ||
                                "NewsData",

                            publishedAt:
                                article.pubDate ||
                                "",

                            author:
                                article.creator &&
                                article.creator.length
                                    ? article.creator[0]
                                    : "Unknown Author",

                            category:
                                detectCategory(
                                    `${article.title || ""} ${
                                        article.description || ""
                                    }`
                                )
                        }));

                    })
                    .catch(error => {

                        console.error(
                            "NewsData error:",
                            error
                        );

                        return [];

                    })
            );
        }


        /* ==========================================
           GNews
        ========================================== */

        if (GNEWS_API_KEY) {

            const gNewsUrl =
                new URL(
                    "https://gnews.io/api/v4/search"
                );

            gNewsUrl.searchParams.set(
                "q",
                "cybersecurity"
            );

            gNewsUrl.searchParams.set(
                "lang",
                "en"
            );

            gNewsUrl.searchParams.set(
                "max",
                "10"
            );

            gNewsUrl.searchParams.set(
                "apikey",
                GNEWS_API_KEY
            );

            requests.push(
                fetch(gNewsUrl)
                    .then(async response => {

                        if (!response.ok) {
                            throw new Error(
                                `GNews HTTP ${response.status}`
                            );
                        }

                        const data =
                            await response.json();

                        return (
                            data.articles || []
                        ).map(article => ({
                            title:
                                article.title ||
                                "Cybersecurity News",

                            description:
                                article.description ||
                                "No description available.",

                            image:
                                article.image ||
                                "",

                            url:
                                article.url ||
                                "#",

                            source:
                                article.source?.name ||
                                "GNews",

                            publishedAt:
                                article.publishedAt ||
                                "",

                            author:
                                "Unknown Author",

                            category:
                                detectCategory(
                                    `${article.title || ""} ${
                                        article.description || ""
                                    }`
                                )
                        }));

                    })
                    .catch(error => {

                        console.error(
                            "GNews error:",
                            error
                        );

                        return [];

                    })
            );
        }


        /* ==========================================
           Get Results
        ========================================== */

        const results =
            await Promise.all(requests);

        const articles =
            results.flat();


        /* ==========================================
           Remove Duplicate Headlines
        ========================================== */

        const seen =
            new Set();

        const uniqueArticles =
            articles.filter(article => {

                const key =
                    (article.title || "")
                        .trim()
                        .toLowerCase();

                if (!key || seen.has(key)) {
                    return false;
                }

                seen.add(key);

                return true;
            });


        /* ==========================================
           Sort Newest First
        ========================================== */

        uniqueArticles.sort(
            (a, b) => {

                const dateA =
                    new Date(
                        a.publishedAt || 0
                    );

                const dateB =
                    new Date(
                        b.publishedAt || 0
                    );

                return dateB - dateA;
            }
        );


        return res.status(200).json({
            success: true,

            updatedAt:
                new Date().toISOString(),

            count:
                uniqueArticles.length,

            articles:
                uniqueArticles
        });

    } catch (error) {

        console.error(
            "Cyber News API error:",
            error
        );

        return res.status(500).json({
            success: false,
            error:
                "Unable to fetch cybersecurity news"
        });
    }
}


/* ==========================================
   Category Detection
========================================== */

function detectCategory(text) {

    const value =
        (text || "").toLowerCase();


    if (
        value.includes("ransomware") ||
        value.includes("ransom")
    ) {
        return "Ransomware";
    }


    if (
        value.includes("malware")
    ) {
        return "Malware";
    }


    if (
        value.includes("phishing")
    ) {
        return "Phishing";
    }


    if (
        value.includes("zero-day") ||
        value.includes("zeroday")
    ) {
        return "Zero-Day";
    }


    if (
        value.includes("artificial intelligence") ||
        value.includes(" ai ")
    ) {
        return "AI";
    }


    if (
        value.includes("vulnerability") ||
        value.includes("cve")
    ) {
        return "Vulnerability";
    }


    return "Technology";
}