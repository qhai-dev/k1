"use client";

import * as React from "react";
import { Direction } from "radix-ui";

function DirectionProvider({
	dir,
	children,
}: React.ComponentProps<typeof Direction.DirectionProvider>) {
	return (
		<Direction.DirectionProvider dir={dir}>
			{children}
		</Direction.DirectionProvider>
	);
}

const useDirection = Direction.useDirection;

export { DirectionProvider, useDirection };
