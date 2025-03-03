import CloseIcon from "@mui/icons-material/Close";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Button, ListItemText, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { BiMessageRoundedDetail, BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { useDispatch } from "react-redux";
import likeicon from "../../assets/linkedin-svgs/like.svg";
import {
  activateComments,
  addComment,
} from "../../redux/sliceFolder/homeSlice";
import { homeStyles } from "./homeStyles";
import UploadPost from "./UploadPost";

interface IProps {
  post: {
    id: number;
    name: string;
    followers: string;
    profileImg:string,
    image: string;
    likes: number;
    likeIcon: string;
    showComments: boolean;
    comments: {
      username: string;
      profile: string;
      time: string;
      comment: string;
    }[];
  };
}
const PostsCard = ({ post }: IProps) => {
  const [commentState, setcommentState] = useState(false);
  const [comment, setcomment] = useState("");
 
  const dispatch = useDispatch();
  const handleComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcomment(event.target.value);
    event.target.value && setcommentState(true);
  };
  const postComment = () => {
    dispatch(addComment({ id: post.id, comment: comment }));
    setcomment("");
  };

  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      gap={1}
      sx={homeStyles.posts.container}
    >
      
      <Stack
        direction={"row"}
        width={"95%"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
      >
        <Box
          component={"img"}
          src={post.profileImg===''?`https://source.unsplash.com/random/sig=${Math.floor(
            Math.random() * 100
          )}`:post.profileImg}
          sx={homeStyles.posts.postPropfile}
        />
        <ListItemText
          primary={post.name}
          secondary={`${post.followers} followers`}
        />
        <Stack direction={"row"} gap={1} alignItems={"center"}>
          <MoreHorizIcon />
          <CloseIcon />
        </Stack>
      </Stack>
      <Typography sx={homeStyles.posts.description}>
        Nous sommes l’entreprise préférée des étudiants et jeunes diplômés dans
        la catégorie « Conseil, ESN, Ingénierie » en 2024 !
      </Typography>
      <Box
        component={"img"}
        src={post.image}
        width="100%"
        maxHeight="450px"
      />
      <Stack
        direction={"row"}
        gap={1}
        width={"95%"}
        justifyContent={"space-between"}
      >
        <Box>
          <Button
            startIcon={<Box component={"img"} src={likeicon} width={"30px"} />}
            fullWidth
            sx={homeStyles.posts.likeBtn}
          >
            <Stack
              direction={"row"}
              gap={1}
              justifyContent={"space-between"}
              component={"div"}
            >
              <Box
                component={"img"}
                src="https://static.licdn.com/aero-v1/sc/h/f4ly07ldn7194ciimghrumv3l"
                width={"30px"}
                sx={homeStyles.posts.likeEffects}
              />
              <Box
                component={"img"}
                src="https://static.licdn.com/aero-v1/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo"
                width={"30px"}
              />
              <Box
                component={"img"}
                src="https://static.licdn.com/aero-v1/sc/h/9whrgl1hq2kfxjqr9gqwoqrdi"
                width={"30px"}
                sx={homeStyles.posts.likeEffects}
              />
              <Box
                component={"img"}
                src="https://static.licdn.com/aero-v1/sc/h/asmf650x603bcwgefb4heo6bm"
                width={"30px"}
              />
              <Box
                component={"img"}
                src="https://static.licdn.com/aero-v1/sc/h/39axkb4qe8q95ieljrhqhkxvl"
                width={"30px"}
                sx={homeStyles.posts.likeEffects}
              />
              <Box
                component={"img"}
                src="https://static.licdn.com/aero-v1/sc/h/ktcgulanbxpl0foz1uckibdl"
                width={"30px"}
              />
            </Stack>
            like
          </Button>
        </Box>
        <Button
          startIcon={<BiMessageRoundedDetail />}
          fullWidth
          sx={homeStyles.posts.btns}
          onClick={() => dispatch(activateComments(post.id))}
        >
          comment
        </Button>
        <Button startIcon={<BiRepost />} fullWidth sx={homeStyles.posts.btns}>
          repost
        </Button>
        <Button startIcon={<IoIosSend />} fullWidth sx={homeStyles.posts.btns}>
          send
        </Button>
      </Stack>
      <Stack
        direction={"column"}
        width={"95%"}
        gap={1}
        sx={{ display: `${post.showComments ? "flex" : "none"}` }}
      >
        <Stack direction={"row"} width={"100%"}>
          <Box
            component={"img"}
            src="https://pngfre.com/wp-content/uploads/lion-51-1024x1024.png"
            sx={homeStyles.postheader.img}
          />
          <Box
            component={"input"}
            placeholder="Add a comment..."
            value={comment}
            onChange={handleComment}
            sx={homeStyles.postheader.input}
          />
        </Stack>
        <Stack direction={"row"} justifyContent={"flex-start"}>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: "40px",
              p: 0.5,
              ml: "12%",
              display: `${commentState ? "block" : "none"}`,
            }}
            onClick={postComment}
          >
            Post
          </Button>
        </Stack>
        {post.comments.map((item) => (
          <Stack direction={"row"} width={"100%"} key={item.username}>
            <Box
              component={"img"}
              src={item.profile}
              sx={homeStyles.postheader.img}
            />
            <Stack
              direction={"column"}
              gap={1}
              width={"90%"}
              sx={{ bgcolor: "#f2f2f2", borderRadius: "5px", p: 1 }}
            >
              <Stack direction={"row"}>
                <ListItemText
                  primary={item.username}
                  secondary="super tech developer from extended web app tech"
                />
                <Stack direction={"row"} gap={1} alignItems={"center"}>
                  {item.time}
                  <MoreHorizIcon />
                </Stack>
              </Stack>
              <Typography variant="body2">{item.comment}</Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default PostsCard;
