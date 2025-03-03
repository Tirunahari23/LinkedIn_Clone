import {
  Box,
  Button,
  Container,
  Grid,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import company from "../../assets/linkedin-svgs/company.svg";
import { networkFooter } from "../../utils/data";
import { homeStyles } from "../homePage/homeStyles";
import { SearchAppBar } from "../navFolder/SearchAppBar";
const ChatPage = () => {
  return (
    <Box sx={homeStyles.main}>
      <SearchAppBar />
      <Container maxWidth={"lg"} sx={{ mt: "30px" }}>
        <Grid container spacing={{ xs: 0, sm: 1, lg: 2 }} width={"100%"}>
          <Grid item xs={12} md={8.2}>
            <Stack direction={"row"} width={"100%"}>
              <Stack sx={{ width: "40%", border: "1px solid green" }}></Stack>
              <Stack
                direction={"column"}
                sx={{ width: "60%", border: "1px solid red" }}
              >
                <Stack direction={"row"}>
                  <ListItemText primary="Danial Sheakar" secondary="Available"/>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={3.2} display={{ xs: "none", md: "block" }}>
            <Stack direction={"column"} width={"100%"}>
              <Stack
                direction={"column"}
                alignItems={"center"}
                sx={homeStyles.sideBar.container}
              >
                <Stack
                  direction={"column"}
                  gap={1}
                  alignItems={"center"}
                  width="90%"
                  m={2}
                >
                  <Typography
                    sx={homeStyles.sideBar.combiFont}
                    color={"secondary"}
                    textAlign={"center"}
                  >
                    Help create a more connected and joyful world with us.
                  </Typography>
                  <Box
                    component={"img"}
                    src={
                      "https://pngfre.com/wp-content/uploads/lion-51-1024x1024.png"
                    }
                    sx={homeStyles.rightSideBar.img}
                  />
                  <Typography
                    textAlign={"center"}
                    width={"90%"}
                    sx={homeStyles.sideBar.combiFont}
                  >
                    Tirunahari, you might like to follow SoftBank Group Corp.
                  </Typography>
                  <Button variant="outlined" sx={homeStyles.rightSideBar.btn}>
                    follow
                  </Button>
                </Stack>
              </Stack>
              <Box sx={homeStyles.footerCont}>
                <Box sx={homeStyles.footerList}>
                  {networkFooter.map((item) => (
                    <Typography key={item} sx={homeStyles.footerText}>
                      {item}
                    </Typography>
                  ))}
                </Box>
                <Box sx={homeStyles.copyrightCont}>
                  <Box
                    component={"img"}
                    src={company}
                    sx={homeStyles.footerImg}
                  />
                  <Typography sx={homeStyles.copyrightText}>
                    LinkedIn Corporation © 2024
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ChatPage;
