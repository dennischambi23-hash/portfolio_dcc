import { PageHeader } from "../atoms";

type ContentPageProps = {
	expanded?: boolean;
	title: string;
	onClose: () => void;
	children: React.ReactNode;
};
export function ContentPage({
	expanded,
	title,
	children,
	onClose,
}: ContentPageProps) {
	return (
		<div className="bg-gray-900 size-full rounded-xl overflow-hidden border border-gray-700/40">
			<PageHeader expanded={expanded} title={title} onClose={onClose} />
			REYNALDO
		</div>
	);
}
