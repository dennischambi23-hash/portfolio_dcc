import { cn } from "@/lib/utils";

type MacDotProps = {
	expanded?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export function MacDot({ expanded, className, ...rest }: MacDotProps) {
	return (
		<div
			className={cn("h-[14px] w-[14px] rounded-full", className)}
			{...rest}
		/>
	);
}
