/* eslint-disable @typescript-eslint/no-explicit-any */

// allow png imports
declare module '*.png' {
	const value: any;
	export = value;
}

declare module '*.jpg' {
	const value: any;
	export = value;
}

declare module '*.JPG' {
	const value: any;
	export = value;
}

// allow svg imports
declare module '*.svg' {
	import React from 'react';
	const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}
