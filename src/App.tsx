import { Home } from "./views/Home";

function App() {
	return (
		<div className="relative h-dvh w-screen text-white bg-gray-950 dark font-inter">
			<div className="absolute inset-0 bg-size-[30px_30px] bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-[0.25] transition-colors duration-400" />
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gray-950 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] transition-colors duration-400"></div>
			<div className="w-full h-screen absolute overflow-hidden">
				<Home />
			</div>
		</div>
	);
}

export default App;
