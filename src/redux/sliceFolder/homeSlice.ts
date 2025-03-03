import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { postProfils } from "./../../utils/data";

interface IHomeState {
  postProfils: {
    id: number;
    name: string;
    followers: string;
    profileImg:string;
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
  }[];
  currentUser:{
    username:string;
    profile:string;
  }
}

const initialState: IHomeState = {
  postProfils: [...postProfils],
  currentUser:{
    username:'Tirunahari shree shaya',
    profile:'https://pngfre.com/wp-content/uploads/lion-51-1024x1024.png'
  }
};

export const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    addComment: (
      state,
      action: PayloadAction<{ id: number; comment: string }>
    ) => {
      const date = new Date();
      let hour = `${date.getHours()}:${date.getMinutes()}`;
      const obj={
         username:state.currentUser.username ,
          profile:state.currentUser.profile ,
          time: hour,
          comment: action.payload.comment,
      }
       state.postProfils.map((user)=>{
        if( user.id===action.payload.id){
           return user.comments.push(obj);
          }else{
            return user;
          }
       })
      
    },
    activateComments:(state,action:PayloadAction<number>)=>{
          state.postProfils.map((user) => {
            if (user.id === action.payload) {
              return user.showComments=true;
            } else {
              return user;
            }
          });
    },
    addPost:(state,action:PayloadAction<string>)=>{
      const obj = {
        id: Math.floor(Math.random() * 1000),
        name:state.currentUser.username,
        followers: "193,46,5",
        profileImg:state.currentUser.profile,
        image: action.payload,
        likes: 0,
        likeIcon: "",
        showComments: false,
        comments: [],
      };
      state.postProfils.unshift(obj)
    },
}
});

export const { addComment ,activateComments, addPost} = homeSlice.actions;
export default homeSlice.reducer;
