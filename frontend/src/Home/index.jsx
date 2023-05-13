import Nav from '../components/core/navBar'

const Home = () => {
    return (
        <div className={'h-screen hero'} style={{backgroundImage: "url('/hero.jpg')", backgroundSize: "cover"}}>
            <Nav/>
        </div>
    )
}

export default Home