import Header from "./Component/Header";
import Alert from "./Component/Alert";
import Section1 from "./Component/Section1";
import Section2 from "./Component/Section2";
import Section3 from "./Component/Section3";
import Section4 from "./Component/Section4";
import Section5 from "./Component/Section5";
import Section6 from "./Component/Section6";
import Footer from "./Component/Footer";
import YouTube from "./Component/YouTube";
import News from './Component/News'
// import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
	return (
		<div>
			<Header />
			<Alert />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section5 />
			<Section6 />
			<YouTube />
			<News/>
			<Footer />
		</div>
	);
}

export default App;
