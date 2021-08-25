const createArticle = (data) => `
<article class="article-item">
    <header>
        <h3>${data.title}</h3>
    </header>

    <section>
        <p>
            ${data.body}
        </p>
    </section>

    <footer>
        <p>author: ${data.author}</p>
    </footer>
    
</article>
`;

export default createArticle;