/* ===========================================
   SecureSphere API Manager
=========================================== */
console.log("API Manager Loaded");

// ========= API KEYS =========

// NewsData API
const NEWSDATA_API_KEY = CONFIG.NEWSDATA_API_KEY;

/* ==========================================
      GNews API
========================================== */

const GNEWS_API_KEY = CONFIG.GNEWS_API_KEY;
/* ==========================================
      API URLs
========================================== */

const NEWSDATA_URL =
`https://newsdata.io/api/1/news?apikey=${NEWSDATA_API_KEY}&q=cybersecurity&language=en`;

const GNEWS_URL =

`https://gnews.io/api/v4/search?q=cybersecurity&lang=en&max=10&apikey=${GNEWS_API_KEY}`;

/* ==========================================
      Fetch NewsData News
========================================== */

async function fetchNewsData() {

    try {

        console.log("Connecting to NewsData...");

        const response = await fetch(NEWSDATA_URL);

        const data = await response.json();

        return (data.results || []).map(normalizeNewsData);

    }
    catch (error) {

      console.error("NewsData Error:", error);
  
      return [];
  
  }

}
/* ==========================================
      Fetch GNews
========================================== */

async function fetchGNews(){

    try{

        console.log("Connecting to GNews...");

        const response =
        await fetch(GNEWS_URL);

        const data =
        await response.json();

        return (data.articles || []).map(normalizeGNews);

    }

    catch(error){

        console.error(error);

        return [];

    }

}

/* ==========================================
      Normalize NewsData Article
========================================== */

function normalizeNewsData(article){

    return{

        title:
            article.title,

        description:
            article.description,

        image:
            article.image_url,

        url:
            article.link,

        source:
            article.source_id,

        publishedAt:
            article.pubDate,

        author:

            article.creator &&
            article.creator.length>0

            ?

            article.creator[0]

            :

            "Unknown Author",

            category:
            getCategoryFromText(
                article.title + " " + article.description
            )

    };

}


/* ==========================================
      Normalize GNews
========================================== */

function normalizeGNews(article){

    return{

        title:
            article.title,

        description:
            article.description,

        image:
            article.image,

        url:
            article.url,

        source:

            article.source
            ?

            article.source.name

            :

            "Unknown Source",

        publishedAt:
            article.publishedAt,

        author:
            "Unknown Author",

        category:
            "Cyber Security"

    };

}

function getCategoryFromText(text){

    text = (text || "").toLowerCase();

    if(text.includes("malware"))
        return "Malware";

    if(text.includes("ransom"))
        return "Ransomware";

    if(text.includes("phishing"))
        return "Phishing";

    if(text.includes("zero-day"))
        return "Zero-Day";

    if(text.includes("artificial intelligence") ||
       text.includes("ai"))
        return "AI";

    return "Technology";

}