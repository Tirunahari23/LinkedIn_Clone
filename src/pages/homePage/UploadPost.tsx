import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import { Button, ListItemText, Stack, TextField, styled } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/sliceFolder/homeSlice";

const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -10%)",
  width: "50%",
  height: "60vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  img1: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    border: "1px solid #e0e0e0",
    mr: "10px",
  },
};
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: "100%",
});
interface IProps {
  open: boolean;
  handleClose: () => void;
}

const UploadPost = ({ open, handleClose }: IProps) => {
  const [profileImg, setProfileImg] = useState("");
  const dispatch = useDispatch();
  const handleProfile = (e: any) => {
    console.log(e.target.files[0]);
    setProfileImg(URL.createObjectURL(e.target.files[0]));
  };
  const handlePost = () => {
    dispatch(addPost(profileImg));
    handleClose();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack direction={"row"} width={"100%"}>
          <Box
            component={"img"}
            src="https://pngfre.com/wp-content/uploads/lion-51-1024x1024.png"
            sx={style.img1}
          />
          <ListItemText
            primary="Tirunahari Shree Shaya"
            secondary="Post to Anyone"
            sx={{
              "& .MuiTypography-root": { fontSize: "20px", fontWeight: "800" },
            }}
          />
        </Stack>
        <TextField
          sx={{
            border: "none",
            mt: "5%",
            fontSize: "20px",
            width: "100%",

            "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: "none ",
              },
            "& .MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          placeholder="What do you want to talk about"
        />
        <Box sx={{ height: "60%", overflowY: "auto" }}>
          {profileImg && (
            <Box component={"img"} src={profileImg} width={"100%"} />
          )}
        </Box>
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} gap={2}>
            <Box component="label" onChange={handleProfile} sx={{ p: "0px" }}>
              <PhotoSizeSelectActualIcon />
              <VisuallyHiddenInput type="file" accept="image/*" />
            </Box>

            <CalendarMonthIcon />
            <FormatIndentDecreaseIcon />
          </Stack>
          <Button variant="contained" onClick={handlePost}>
            Post
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
export default UploadPost;
