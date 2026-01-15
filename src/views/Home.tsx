import { HeroSection, OverviewCarousel, Statistics } from "@/components";

export function Home() {
	return (
		<div className="w-full h-full">
			<div className="absolute left-18 top-1/2 animate-in fade-in duration-1000">
				<Statistics />
			</div>
			<div className="absolute right-[200px] top-1/2 animate-in fade-in duration-1000">
				<OverviewCarousel />
			</div>
			<HeroSection className="animate-in fade-in duration-1000" />
		</div>
	);
}
