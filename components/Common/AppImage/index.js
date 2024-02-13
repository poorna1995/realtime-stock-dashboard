import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
// import placeholder from "public/assets/imageList.png";
const StyledImage = styled(Image)(({ theme }) => ({
	...theme,
}));

const AppImage = ({ src, alt, style, sx, ...props }) => {
	const imgURL = src === "" ? placeholder : src;
	return (
		<StyledImage
			src={src}
			alt={alt || " "}
			sx={sx}
			style={style}
			{...props}
		/>
	);
};

export default AppImage;
