import Hero from './components/Home/Hero'
import TopMovies from './components/Home/TopMovies/TopMovies'
import PopularGenres from './components/PopularGenres/PopularGenres'

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularGenres />
      <TopMovies />
    </div>
  )
}
