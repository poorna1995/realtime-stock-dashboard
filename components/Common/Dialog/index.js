import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import React from "react";
import { MdClose } from "react-icons/md";
const BaseDialog = ({ open, handleClose, children, title,hideCloseButton }) => {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			scroll="paper"
			PaperProps={{
				sx: {
					borderRadius: "10px",
					maxWidth: "1000px",
				},
			}}
		>
			{!hideCloseButton && (
				<IconButton
					onClick={() => handleClose()}
					sx={{ position: "absolute", top: "10px", right: "10px" }}
				>
					<MdClose />
				</IconButton>
			)}
			{title && <DialogTitle>{title}</DialogTitle>}
			<DialogContent>{children}</DialogContent>
		</Dialog>
	);
};

export default BaseDialog;
