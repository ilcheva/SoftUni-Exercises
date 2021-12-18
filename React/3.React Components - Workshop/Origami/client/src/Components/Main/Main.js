import style from './Main.module.css'

const Main = (
    { posts }
) => {
    console.log(posts)
    return (
        <main className={style.main}>
            <h1 className={style.heading}>
                Soooome Heading
            </h1>
            <div className={style.posts}>
                {posts.map(x =>
                    <div className={style.post} key={x.id}>
                        <img src="blue-origami-bird.png" alt="blue bird" />
                        <p className={style.description}>
                            {x.content}
                        </p>
                        <div>
                            <span>
                                <small>Author:</small> {x.author}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Main;