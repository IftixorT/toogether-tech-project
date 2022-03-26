// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'
import Routes from './routes/routes'
import './styles/style.scss'
import './styles/style.css'
import './styles/anime.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

	// const router = useRouter();
	// const router = useState('/');

    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push();
    //     }, 3000)
    // })

	return (
		<>
			<Routes />
		</>
	)
}

export default App
