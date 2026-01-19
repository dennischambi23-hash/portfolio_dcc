import { projects } from "@/constants/profile";
import { ProjectCard } from "../molecules";

export function Projects() {
	return (
		<div className="w-full h-full flex flex-col p-4 md:p-6 overflow-auto custom-scrollbar">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-10">
				{projects.map((project) => (
					<ProjectCard
						key={project.title}
						title={project.title}
						rol={project.rol}
						image={project.image}
						description={project.description}
						technologies={project.technologies}
						link={project.link}
						githubLink={project.githubLink}
					/>
				))}
			</div>
		</div>
	);
}

export function ProjectsPreview() {
	return (
		<div className="w-full h-full p-4 flex flex-col gap-5">
			<div className="flex gap-4">
				<div className="flex flex-col flex-1 gap-2">
					<div className="w-full h-[60px] bg-gray-600/40 rounded-lg" />
					<div className="h-2 bg-gray-600/40 rounded-full w-2/3" />
					<div className="h-2 bg-gray-600/40 rounded-full w-full" />
					<div className="h-2 bg-gray-600/40 rounded-full w-full" />
				</div>
				<div className="flex flex-col flex-1 gap-2">
					<div className="w-full h-[60px] bg-gray-600/40 rounded-lg" />
					<div className="h-2 bg-gray-600/40 rounded-full w-2/3" />
					<div className="h-2 bg-gray-600/40 rounded-full w-full" />
					<div className="h-2 bg-gray-600/40 rounded-full w-full" />
				</div>
				<div className="flex flex-col flex-1 gap-2">
					<div className="w-full h-[60px] bg-gray-600/40 rounded-lg" />
					<div className="h-2 bg-gray-600/40 rounded-full w-2/3" />
					<div className="h-2 bg-gray-600/40 rounded-full w-full" />
					<div className="h-2 bg-gray-600/40 rounded-full w-full" />
				</div>
			</div>
			<div className="flex gap-4">
				<div className="flex flex-col flex-1 gap-2">
					<div className="w-full h-[60px] bg-gray-600/40 rounded-lg" />
					<div className="h-2 bg-gray-600/40 rounded-full w-2/3" />
					<div className="h-2 bg-gray-600/40 rounded-full w-full" />
				</div>
				<div className="flex flex-col flex-1 gap-2">
					<div className="w-full h-[60px] bg-gray-600/40 rounded-lg" />
					<div className="h-2 bg-gray-600/40 rounded-full w-2/3" />
					<div className="h-2 bg-gray-600/40 rounded-full w-full" />
				</div>
				<div className="flex flex-col flex-1 gap-2">
					<div className="w-full h-[60px] bg-gray-600/40 rounded-lg" />
					<div className="h-2 bg-gray-600/40 rounded-full w-2/3" />
					<div className="h-2 bg-gray-600/40 rounded-full w-full" />
				</div>
			</div>
		</div>
	);
}
