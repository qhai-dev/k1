import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";

import { cn } from "../../lib/utils";

const titleVariants = cva("text-text-0 font-semibold", {
	variants: {
		heading: {
			1: "text-[2rem] leading-11",
			2: "text-[1.75rem] leading-10",
			3: "text-2xl leading-8",
			4: "text-xl leading-7",
			5: "text-lg leading-6",
			6: "text-base leading-5.5",
		},
	},
	defaultVariants: {
		heading: 1,
	},
});

type TitleProps = React.ComponentProps<"h1"> &
	VariantProps<typeof titleVariants> & { asChild?: boolean };

export function Title({
	className,
	heading,
	children,
	asChild = false,
}: TitleProps) {
	const Comp = asChild ? Slot.Root : `h${heading}`;

	return (
		<Comp
			data-slot="title"
			className={cn(titleVariants({ className, heading }))}
		>
			{children}
		</Comp>
	);
}
