import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<div id='HomePage' className='all-pages'>
			<h1>Welcome to the first page!</h1>

			<p>I'm baby polaroid offal you probably haven't heard of them gochujang edison bulb yr. Tumeric poutine cold-pressed neutra meh, gorpcore post-ironic paleo tattooed twee craft beer green juice hell of. Messenger bag godard kitsch, marxism paleo migas sustainable skateboard locavore kale chips. Small batch narwhal truffaut forage pickled shaman cardigan leggings tousled gochujang mumblecore. Gatekeep franzen meh neutra kickstarter same tumeric man braid shaman vice butcher occupy Brooklyn cold-pressed.</p>

			<Link
				to={'/movies/'}>
				<Button variant="secondary">See movies</Button>
			</Link>

		</div>

	)
}

export default HomePage
