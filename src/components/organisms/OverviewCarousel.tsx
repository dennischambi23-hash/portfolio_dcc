import { CardSwap } from "../atoms";
import { ContentPage } from "../molecules";

export function OverviewCarousel() {
	return (
		<CardSwap
			cardDistance={60}
			verticalDistance={90}
			delay={5000}
			pauseOnHover={true}
		>
			<ContentPage title="Resume" expanded={false} onClose={() => {}}>
				uno
			</ContentPage>

			<ContentPage title="Resume" expanded={false} onClose={() => {}}>
				hola 2
			</ContentPage>

			<ContentPage title="Resume" expanded={false} onClose={() => {}}>
				hola 3
			</ContentPage>
		</CardSwap>
	);
}
