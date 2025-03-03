import { Box, Button, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { homeStyles } from './homeStyles';
import { networkFooter } from '../../utils/data';
import company from "../../assets/linkedin-svgs/company.svg";
const RightSideBar = () => {
  return (
    <Stack direction={"column"} gap={1} width={"100%"}>
      <Stack direction={"column"} sx={homeStyles.rightSideBar.container}>
        <Typography sx={homeStyles.sideBar.fontWeights}>
          Linkedin News
        </Typography>
        <ListItem>
          <ListItemText
            sx={homeStyles.rightSideBar.listItem}
            primary="Key takeaways Budget 2024"
            secondary="3d ago • 925 readers"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            sx={homeStyles.rightSideBar.listItem}
            primary="Key takeaways Budget 2024"
            secondary="3d ago • 925 readers"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            sx={homeStyles.rightSideBar.listItem}
            primary="Key takeaways Budget 2024"
            secondary="3d ago • 925 readers"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            sx={homeStyles.rightSideBar.listItem}
            primary="Key takeaways Budget 2024"
            secondary="3d ago • 925 readers"
          />
        </ListItem>
      </Stack>
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
            src={"https://pngfre.com/wp-content/uploads/lion-51-1024x1024.png"}
            sx={homeStyles.rightSideBar.img}
          />
          <Typography
            textAlign={"center"}
            width={"90%"}
            sx={homeStyles.sideBar.combiFont}
          >
            Tirunahari, you might like to follow SoftBank Group Corp.
          </Typography>
          <Button
            variant="outlined"
            sx={homeStyles.rightSideBar.btn}
          >
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
          <Box component={"img"} src={company} sx={homeStyles.footerImg} />
          <Typography sx={homeStyles.copyrightText}>
            LinkedIn Corporation © 2024
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}

export default RightSideBar
