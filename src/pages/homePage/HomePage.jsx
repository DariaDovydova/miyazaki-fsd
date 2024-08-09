import { Quotes } from "../../shared/quotes/Quotes";
import { MovieList } from "../../widgets/movies/MovieList";


function HomePage() {

  return (
    <div>
      <Quotes />
      <MovieList />
    </div>
  )
}

export { HomePage };