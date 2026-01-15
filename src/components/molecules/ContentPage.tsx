import { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import { PageHeader } from "../atoms";

type ContentPageProps = {
	expanded?: boolean;
	title: string;
	onClose: () => void;
	children: React.ReactNode;
};
// export function ContentPage({
// 	expanded,
// 	title,
// 	children,
// 	onClose,
// }: ContentPageProps) {
// 	return (
// 		<div className="bg-gray-900 size-full rounded-xl overflow-hidden border border-gray-700/40">
// 			<PageHeader expanded={expanded} title={title} onClose={onClose} />
// 			REYNALDO
// 		</div>
// 	);
// }
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	expanded?: boolean;
	title: string;
	onClose: () => void;
	children: React.ReactNode;
}

const transformedStyles =
	"top-1/2 left-1/2 [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden]";
const macWindowStyle =
	"bg-gray-900 size-full rounded-xl overflow-hidden border border-gray-700/40";

export const ContentPage = forwardRef<HTMLDivElement, CardProps>(
	({ className, expanded, title, onClose, ...rest }, ref) => {
		return (
			<div
				ref={ref}
				{...rest}
				className={cn(
					"absolute transform-3d will-change-transform backface-hidden",
					macWindowStyle,
					className,
				)}
			>
				<PageHeader expanded={expanded} title={title} onClose={onClose} />
			</div>
		);
	},
);
// Card.displayName = "Card";
