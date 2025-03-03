import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Button, Stack } from "@mui/material";
const homeStyles = {
  priceFont: {
    border: "1px solid",
    width: "100px",
    fontWeight: 550,
    color: "#000000",
    position: "relative",
    textAlign: "center",

    "& div": {
      fontSize: "15px",
      color: "red  ",
      border: "1px solid ",
      width: "100px",
      position: "absolute",
      top: "-50px",
      display: "none",
    },
    "&:hover": {
      "& div": {
        color: "black",
        display: "block",
      },
    },
  },
};
const Test = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        gap: "50px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button sx={homeStyles.priceFont} startIcon={<FavoriteBorderIcon />}>
        <Stack component={"div"}>
          <FavoriteBorderIcon/>
          <MoreHorizIcon />
        </Stack>
        Like
      </Button>
    </Box>
  );
};

export default Test;
