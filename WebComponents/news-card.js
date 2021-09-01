class NewsCard extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
        //let article = this.getAttribute('article');        
        
        const title = this.getAttribute('title');
        const desc = this.getAttribute('description');
        const urltoimage = this.getAttribute('urlToImage');
        const url = this.getAttribute('url');

        this.innerHTML = `        
                    <style>
                    h2 {
                        font-family: Georgia, 'Times New Roman', Times, serif;
                    }
                    
                    a,
                    a:visited {
                        text-decoration: none;
                        color: inherit;
                    }
                    
                    img {
                        width: 50%;
                    </style>

                    <a href="${url}">
                        <h1>${title}</h1>
                        <img src="${urltoimage}"></img>
                        <p>${desc}</p>
                    </a>` ;
        
    }  
}
customElements.define("news-card", NewsCard); 

