'use client'

import {HTMLProps, PropsWithChildren, useState} from "react";

export enum FS {
	nano = "0.8rem",
	sm = "0.9rem",
	md = "1rem",
	lg = "1.2rem",
	xl = "1.5rem",
	xxl = "2rem",
}

interface TextProps {
	bold?: boolean,
	light?: boolean,
	italic?: boolean,
	underline?: boolean,
	color?: string,
	fontSize?: FS,
	className?: HTMLProps<HTMLElement>["className"];
	customSize?: number
}

const Text: React.FC<TextProps & PropsWithChildren> = ({
	                                                       bold,
	                                                       light,
	                                                       italic,
	                                                       underline,
	                                                       color,
	                                                       fontSize,
	                                                       customSize,
	                                                       className,
	                                                       children
                                                       }) => {
	
	return (
		<div style={{
			fontStyle: italic ? "italic" : "normal",
			fontWeight: bold ? "600" : light ? "300" : "400",
			fontSize: fontSize ? fontSize : customSize ? customSize : FS.md,
			color: color,
			textDecoration: underline ? "underline" : "none"
		}}
		   className={className}>
			{children}
		</div>
	)
}

export default Text