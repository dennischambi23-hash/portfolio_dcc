import { lazy, Suspense } from "react";
import { PageCarousel, PageContent } from "../molecules";
import { ProjectsPreview } from "./ProjectsPreview";
import { ResumePreview } from "./ResumePreview";
import { SkillsPreview } from "./SkillsPreview";

// Lazy load heavy components
const Resume = lazy(() =>
	import("./Resume").then((module) => ({ default: module.Resume })),
);
const Projects = lazy(() =>
	import("./Projects").then((module) => ({ default: module.Projects })),
);
const Skills = lazy(() =>
	import("./Skills").then((module) => ({ default: module.Skills })),
);

export function OverviewCarousel() {
	return (
		<PageCarousel
			cardDistance={60}
			verticalDistance={90}
			delay={5000}
			pauseOnHover={true}
		>
			<PageContent title="Resume" preview={<ResumePreview />}>
				<Suspense fallback={<ResumePreview />}>
					<Resume />
				</Suspense>
			</PageContent>

			<PageContent title="Projects" preview={<ProjectsPreview />}>
				<Suspense fallback={<ProjectsPreview />}>
					<Projects />
				</Suspense>
			</PageContent>

			<PageContent title="Skills" preview={<SkillsPreview />}>
				<Suspense fallback={<SkillsPreview />}>
					<Skills />
				</Suspense>
			</PageContent>
		</PageCarousel>
	);
}
