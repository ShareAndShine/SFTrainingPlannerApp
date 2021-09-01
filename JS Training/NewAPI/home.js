import { newsAPIURL } from "./api.js";
import './news-card.js';

// Make a call to get news feed on page load
window.addEventListener('load', () => {
    getNewsFeed();
});

async function getNewsFeed()
{
    // Make a call to new feed api
    const response = await fetch(newsAPIURL);

    const jsonresponse = await response.json();

    // identify <main> tag
    // Loop thru articles
    // Display articles in our own custom element named <news-card>

    const maintag = document.querySelector('main');

        jsonresponse.articles.map(article => {
       
        const newselement = document.createElement('news-card');

        //Set article property 
        newselement.article = article;
        console.log(JSON.stringify(article));

        //Attach with main container
        maintag.appendChild(newselement);

    });

    

}