import { Card, CardSwap, ContentPage } from "@/components";

export function Home() {
	return (
		<div>
			<CardSwap
				cardDistance={60}
				verticalDistance={90}
				delay={5000}
				pauseOnHover={true}
			>
				<Card>
					<ContentPage title="Resume" expanded={false} onClose={() => {}}>
						hola 1
					</ContentPage>
				</Card>
				<Card>
					<ContentPage title="Resume" expanded={false} onClose={() => {}}>
						hola 2
					</ContentPage>
				</Card>
				<Card>
					<ContentPage title="Resume" expanded={false} onClose={() => {}}>
						hola 3
					</ContentPage>
				</Card>
				<Card>
					<ContentPage title="Resume" expanded={false} onClose={() => {}}>
						hola 4
					</ContentPage>
				</Card>
			</CardSwap>
		</div>
	);
}
