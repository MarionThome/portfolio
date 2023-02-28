import NavBar from "../components/NavBar";
import Home from "../components/Home";
import About from "../components/About"

export default () => (
	<main>
		<div style ={{height : "100vh"}}>
		<NavBar/>
		<Home/>
		</div>
		<About/>
	</main>
)
