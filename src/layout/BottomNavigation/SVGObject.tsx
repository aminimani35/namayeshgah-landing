import React from 'react';

interface SVGObjectProps {
    src: string;
    width?: string;
    height?: string;
    title?: string;
}

const SVGObject: React.FC<SVGObjectProps> = ({src, width = '100%', height = '100%', title = 'SVG Image'}) => (
    <object type="image/svg+xml" data={src} width={width} height={height} aria-label={title}
            className="w-full max-w-[80%]">
        {/* Fallback content for browsers that do not support object tag */}
        <img src={src} alt={title} width={width} height={height}/>
    </object>
);

export default SVGObject;
