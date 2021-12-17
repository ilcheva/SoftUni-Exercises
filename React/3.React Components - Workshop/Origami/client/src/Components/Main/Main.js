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
        {posts.map(x =>
            <p key={x.id}>{x.content}</p>
        )}
    </main>
    )
}

export default Main;