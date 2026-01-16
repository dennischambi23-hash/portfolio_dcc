import { PageCarousel, PageContent } from "../molecules";
import { Resume, ResumePreview } from "./Resume";

export function OverviewCarousel() {
	return (
		<PageCarousel
			cardDistance={60}
			verticalDistance={90}
			delay={5000}
			pauseOnHover={true}
		>
			<PageContent title="Resume" preview={<ResumePreview />}>
				<div className="size-full bg-amber-400">
					<Resume />
				</div>
			</PageContent>

			<PageContent
				title="Projects"
				preview={
					<div>
						<div className="size-full bg-red-400">resumen</div>
					</div>
				}
			>
				<div className="size-full bg-red-400">resumen</div>
			</PageContent>

			<PageContent
				title="Skills"
				preview={
					<div>
						<div className="size-full bg-green-400">resumen</div>
					</div>
				}
			>
				<div className="size-full bg-green-400">resumen</div>
			</PageContent>
		</PageCarousel>
	);
}
