import type { VariantProps } from "class-variance-authority";

import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";

const spaceVariants = cva("inline-flex w-full", {
	variants: {
		wrap: {
			false: null,
			true: "flex-wrap",
		},
		vertical: {
			false: null,
			true: "flex-col",
		},
		align: {
			start: "items-start",
			center: "items-center",
			end: "items-end",
			baseline: "items-baseline",
		},
		spacing: {
			tight: "gap-2",
			medium: "gap-4",
			loose: "gap-6",
		},
	},
	defaultVariants: {
		align: "center",
		spacing: "tight",
		vertical: false,
		wrap: false,
	},
});

type SpaceProps = React.ComponentProps<"div"> &
	VariantProps<typeof spaceVariants>;

function Space({
	wrap,
	vertical,
	align,
	spacing,
	className,
	children,
	...props
}: SpaceProps) {
	return (
		<div
			className={cn(
				spaceVariants({ wrap, vertical, align, spacing, className }),
			)}
			{...props}
		>
			{children}
		</div>
	);
}

export { Space };
