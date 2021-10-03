const PORT = 8000
const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');
const express = require('express');

const app = express()
const url = 'https://dasankush.github.io/javascriptTut2/'
axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
        console.log(html);
        $('#save-btn', html).each(function(){
            const tag = $(this).text()
            const attr = $(this).find('button').attr('onclick')
            articles.push({
                tag,
                attr
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))
app.listen(PORT, () => console.log('server running on PORT ${PORT}') ) 