'use client'

import {HTMLProps, PropsWithChildren, useState} from "react";

export enum FontSize {
	nano = "0.8rem",
	sm = "0.9rem",
	md = "1rem",
	lg = "1.2rem",
	xl = "1.5rem",
	xxl = "2rem",
}

interface TextProps {
	heavy?: boolean,
	bold?: boolean,
	light?: boolean,
	italic?: boolean,
	underline?: boolean,
	color?: string,
	fontSize?: FontSize,
	fontFamily?: string,
	className?: HTMLProps<HTMLElement>["className"];
	customSize?: number
}

const Text: React.FC<TextProps & PropsWithChildren> = ({
	                                                       heavy,
	                                                       bold,
	                                                       light,
	                                                       italic,
	                                                       underline,
	                                                       color,
	                                                       fontSize,
	                                                       fontFamily,
	                                                       customSize,
	                                                       className,
	                                                       children
                                                       }) => {
	
	return (
		<div style={{
			fontFamily: fontFamily? fontFamily : undefined,
			fontStyle: italic ? "italic" : "normal",
			fontWeight: heavy ? "700" : bold ? "600" : light ? "300" : "400",
			fontSize: fontSize ? fontSize : customSize ? customSize : FontSize.md,
			color: color,
			textDecoration: underline ? "underline" : "none"
		}}
		     className={className}>
			{children}
		</div>
	)
}

export default Text