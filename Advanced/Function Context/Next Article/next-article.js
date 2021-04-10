function getArticleGenerator(articles) {
    let content = document.getElementById('content')

    function showNext() {
        let info = articles.shift();
        if (info) {
            let article = document.createElement('article');
            article.textContent = info;
            content.appendChild(article);

        }

    }
    return showNext;
}
