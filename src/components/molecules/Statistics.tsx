import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

interface StatItemProps {
	value: number;
	label1: string;
	label2: string;
}

function StatItem({ value, label1, label2 }: StatItemProps) {
	const numberRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const element = numberRef.current;
		if (!element) return;

		const obj = { count: 0 };
		gsap.to(obj, {
			count: value,
			duration: 2,
			ease: "power2.out",
			onUpdate: () => {
				if (element) {
					element.textContent = `+${Math.round(obj.count)}`;
					element.setAttribute("aria-valuenow", String(Math.round(obj.count)));
				}
			},
		});
	}, [value]);

	const label = `${label1} ${label2}`.toLowerCase();

	return (
		<div className="flex flex-col" role="group" aria-label={label}>
			<div
				ref={numberRef}
				className="text-6xl font-black text-gray-50"
				aria-label={`${value} ${label}`}
				aria-valuenow={0}
				aria-valuemin={0}
				aria-valuemax={value}
				role="progressbar"
			>
				+0
			</div>
			<div className="text-base font-montserrat text-gray-400 uppercase tracking-wider mt-1">
				{label1}
			</div>
			<div className="text-base font-montserrat text-gray-400 uppercase tracking-wider">
				{label2}
			</div>
		</div>
	);
}

export function Statistics() {
	return (
		<aside
			className="flex flex-col gap-8 -translate-y-1/2"
			aria-label="Professional statistics and achievements"
		>
			<StatItem value={12} label1="Years of" label2="Experience" />
			<StatItem value={46} label1="Projects" label2="Completed" />
			<StatItem value={20} label1="Worldwide" label2="Clients" />
		</aside>
	);
}
