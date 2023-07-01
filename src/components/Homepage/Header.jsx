export default function Header() {
  return (
    <header className="header">
        <nav className="navbar">
            <div className="logo">
                <img src="./images/icons/logo.png" alt="" />
                <p className="imagegen" translate="no">Imagen</p>
            </div>
            <a href="https://github.com/Donny-C-1/imagen" className="contribute">
                <p>Contribute</p>
                <img src="./images/icons/github-mark.svg" alt="github" />
            </a>
        </nav>
        <section className="landing-page">
            <h1 className="landing-page__header">
                Polish your favourite picture and make it the best
            </h1>
            <p className="landing-page__desc">
                Imagen provides you with many features for editing your pictures
            </p>
        </section>
    </header>
  )
}
