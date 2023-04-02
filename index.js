const PORT = 8000

const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const url = 'https://www.theguardian.com/uk'

axios(url)
    // consider it as a reader (someone ho reads)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = [];
        $('.fc-item__title', html).each(function () {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({ title, url })

        })

        console.log("articles", articles)
        console.log("myhtml", html)
    })
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

// npx kill-port 8000
