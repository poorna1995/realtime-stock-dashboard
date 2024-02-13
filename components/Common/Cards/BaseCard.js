import { Card, styled } from "@mui/material";
import React from "react";

const StyledCard = styled(Card)(({ theme }) => ({
	boxShadow: " 0px 0px 30px rgba(43, 47, 84, 0.05)",
	borderRadius: "5px",
	// padding: "24px",
	
	...theme,
}));

const BaseCard = ({ children, ...props }) => {
	const { sx } = props;
	return <StyledCard {...props}>{children}</StyledCard>;
};

export default BaseCard;
