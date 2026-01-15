import { CalendarSearch, Github, Linkedin, Mail } from "lucide-react";
import { Button, TextType } from "@/components/atoms";
import { cn } from "@/lib/utils";

const summary = [
	"UX-focused full stack and mobile developer with 7+ years of experience building user-friendly products for web and mobile.",
	"Background in graphic design and backend development, helping me connect design ideas with solid engineering.",
	"I enjoy turning UX principles into clean, accessible, and scalable interfaces.",
	"I focus on intuitive UI systems with consistent design, usability, and pixel-perfect details.",
];
type HeroSectionProps = {
	className?: string;
};
export function HeroSection({ className }: HeroSectionProps) {
	return (
		<section
			className={cn(
				"flex flex-col h-full justify-center items-center font-inter",
				className,
			)}
		>
			<img
				src="https://res.cloudinary.com/dtunq8gr3/image/upload/t_aayushfinal/aayush1_tgrcxs"
				alt="Rey"
				className="size-[280px] rounded-full object-cover"
			/>
			<h1 className="text-3xl text-gray-50 mt-2 font-bold">
				Hi, I'm Reynaldo Quispe
			</h1>

			<p className="text-2xl text-gray-400 font-montserrat mt-1 font-thin tracking-widest">
				Software Engineer
			</p>
			<div className="flex gap-3 mt-3">
				<Button variant="outline" size="icon">
					<Mail />
				</Button>
				<Button variant="outline" size="icon">
					<Linkedin />
				</Button>
				<Button variant="outline" size="icon">
					<Github />
				</Button>
				<Button variant="outline" size="icon">
					<CalendarSearch />
				</Button>
			</div>
			<div className="relative mt-4 min-w-lg">
				<TextType
					text={summary}
					typingSpeed={75}
					pauseDuration={1500}
					showCursor={true}
					cursorCharacter="|"
					className="absolute max-w-lg text-gray-300 font-thin font-montserrat text-center"
				/>
			</div>
		</section>
	);
}
