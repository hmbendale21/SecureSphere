/* ==========================================
   SecureSphere API Manager
   Vercel Serverless API
========================================== */

console.log("API Manager Loaded");


/* ==========================================
   SecureSphere Cyber News API
========================================== */

async function fetchCyberNews() {

    try {

        console.log(
            "Connecting to SecureSphere Cyber News API..."
        );


        const response =
            await fetch("/api/cyber-news", {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            });


        if (!response.ok) {

            throw new Error(
                `Cyber News API HTTP ${response.status}`
            );

        }


        const data =
            await response.json();


        console.log(
            "SecureSphere API Response:",
            data
        );


        if (!data.success) {

            throw new Error(
                data.error ||
                "Cyber News API failed"
            );

        }


        return data;

    }

    catch (error) {

        console.error(
            "Cyber News API Error:",
            error
        );


        return {
            success: false,
            count: 0,
            articles: [],
            error: error.message
        };

    }

}