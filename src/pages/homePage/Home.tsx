import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { SearchAppBar } from "../navFolder/SearchAppBar";
import PostsCard from "./PostsCard";
import RightSideBar from "./RightSideBar";
import SideBar from "./SideBar";
import UploadPost from "./UploadPost";
import { homeStyles } from "./homeStyles";
const Home = () => {
  const [open, setOpen] = useState(false);
  const { postProfils } = useSelector((state: RootState) => state.homeSlice);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={homeStyles.main}>
      <SearchAppBar />
      <Container maxWidth={"lg"} sx={{ mt: "30px" }}>
        <Grid container spacing={{ xs: 0, sm: 1, lg: 2 }} width={"100%"}>
          <Grid item xs={12} md={2.6}>
            <SideBar />
          </Grid>
          <Grid item xs={12} md={6.2}>
            <Stack direction={"column"} gap={1} width={"100%"}>
              <UploadPost open={open} handleClose={handleClose}/>
              <Stack
                direction={"column"}
                alignItems={"center"}
                gap={1}
                sx={homeStyles.postheader}
              >
                <Stack direction={"row"} width={"100%"}>
                  <Box
                    component={"img"}
                    src="https://pngfre.com/wp-content/uploads/lion-51-1024x1024.png"
                    sx={homeStyles.postheader.img}
                  />
                  <Stack
                    justifyContent={"center"}
                    component={"div"}
                    sx={homeStyles.postheader.input}
                    onClick={handleOpen}
                  >
                    <Typography
                      color={"secondary"}
                      sx={homeStyles.sideBar.combiFont}
                    >
                      Start a post
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction={"row"}
                  gap={1}
                  width={"90%"}
                  justifyContent={"space-between"}
                >
                  <Button
                    startIcon={<PhotoSizeSelectActualIcon />}
                    sx={{
                      ...homeStyles.postheader.btn1,
                      "& .MuiButton-startIcon": {
                        color: "#378fe9",
                      },
                    }}
                  >
                    Media
                  </Button>
                  <Button
                    startIcon={<CalendarMonthIcon />}
                    sx={{
                      ...homeStyles.postheader.btn1,
                      "& .MuiButton-startIcon": {
                        color: "#e06847",
                      },
                    }}
                  >
                    Events
                  </Button>
                  <Button
                    startIcon={<FormatIndentDecreaseIcon />}
                    sx={{
                      ...homeStyles.postheader.btn1,
                      "& .MuiButton-startIcon": {
                        color: "#e06847",
                      },
                    }}
                  >
                    Write Article
                  </Button>
                </Stack>
              </Stack>
              {postProfils.map((user) => (
                <PostsCard post={user} key={user.id} />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={3.2} display={{ xs: "none", md: "block" }}>
            <RightSideBar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
