import { PageCarousel, PageContent } from "../molecules";
import { Projects, ProjectsPreview } from "./Projects";
import { Resume, ResumePreview } from "./Resume";
import { Skills, SkillsPreview } from "./Skills";

export function OverviewCarousel() {
	return (
		<PageCarousel
			cardDistance={60}
			verticalDistance={90}
			delay={5000}
			pauseOnHover={true}
		>
			<PageContent title="Resume" preview={<ResumePreview />}>
				<Resume />
			</PageContent>

			<PageContent title="Projects" preview={<ProjectsPreview />}>
				<Projects />
			</PageContent>

			<PageContent title="Skills" preview={<SkillsPreview />}>
				<Skills />
			</PageContent>
		</PageCarousel>
	);
}
