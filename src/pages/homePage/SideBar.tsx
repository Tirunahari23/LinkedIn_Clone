import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { homeStyles } from "./homeStyles";
const SideBar = () => {
  return (
    <>
      <Stack
        direction={"column"}
        alignItems={"center"}
        gap={1.5}
        sx={homeStyles.sideBar.container}
      >
        <Box sx={homeStyles.sideBar.headerImg}>
          <Box
            component={"img"}
            src="https://pngfre.com/wp-content/uploads/lion-51-1024x1024.png"
            sx={homeStyles.sideBar.profile}
          />
        </Box>

        <Typography sx={homeStyles.sideBar.fontWeights}>
          Tirunahari shree shaya
        </Typography>
        <Typography
          width={"80%"}
          textAlign={"center"}
          sx={homeStyles.sideBar.smallFonts}
        >
          Hyderabad/Under Graduate(2021) /good at Full stack web-dev
        </Typography>
        <Divider sx={homeStyles.sideBar.divider} />
        <Stack direction={"column"} width={"90%"}>
          <Typography sx={homeStyles.sideBar.secondaryText}>
            Connections
          </Typography>
          <Typography
            sx={{
              ...homeStyles.sideBar.smallFonts,
              ...homeStyles.sideBar.fontWeights,
            }}
          >
            Grow your network
          </Typography>
        </Stack>
        <Divider sx={homeStyles.sideBar.divider} />

        <Stack direction={"column"} width={"90%"}>
          <Typography sx={homeStyles.sideBar.smallFonts} color={"secondary"}>
            Strengthen your profile with an AI writing assistant
          </Typography>
          <Typography
            sx={{
              ...homeStyles.sideBar.smallFonts,
              ...homeStyles.sideBar.fontWeights,
            }}
          >
            Try Premium for free
          </Typography>
        </Stack>
        <Divider sx={homeStyles.sideBar.divider} />
        <Stack direction={"row"} alignItems={"center"} gap={1} width={"90%"}>
          <BookmarkIcon color="secondary" />

          <Typography sx={homeStyles.sideBar.fontWeights}>My items</Typography>
        </Stack>
      </Stack>
      <Stack
        direction={"column"}
        alignItems={"center"}
        gap={1.5}
        sx={homeStyles.sideBar.container}
      >
        <Stack direction={"column"} width={"90%"}>
          <Typography sx={homeStyles.sideBar.smallFonts} color={"secondary"}>
            Strengthen your profile with an AI writing assistant
          </Typography>
          <Typography
            sx={{
              ...homeStyles.sideBar.smallFonts,
              ...homeStyles.sideBar.fontWeights,
            }}
          >
            Try Premium for free
          </Typography>
        </Stack>
        <Divider sx={homeStyles.sideBar.divider} />
        <Stack direction={"column"} width={"90%"}>
          <Typography sx={homeStyles.sideBar.secondaryText}>
            Connections
          </Typography>
          <Typography
            sx={{
              ...homeStyles.sideBar.smallFonts,
              ...homeStyles.sideBar.fontWeights,
            }}
          >
            Grow your network
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default SideBar;
