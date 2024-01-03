import { FormControl, FormHelperText, Input, InputLabel, Card , CardHeader, Typography, Divider, FormLabel, Select, MenuItem, TextField, Button, RadioGroup, Radio, InputAdornment, Box, Avatar, IconButton, CardMedia, CardContent, CardActions, Collapse } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Calendar from 'react-calendar';
import React from "react";
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { IoPersonOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { MdRecommend } from "react-icons/md";
import { Form, useForm } from 'react-hook-form';
import { IoIosArrowDown } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdCheckbox } from "react-icons/io";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

            
const Booking = () => {
  const [value, onChange] = useState(new Date());
  const {
   register,
   handleSubmit,
   watch,
   formState: { errors },
 } = useForm()

 const convertToISOString = (value) => {
   const date = new Date(value); 
   const utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDay() + 1,
                             date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds())
   
   console.log("dateis ",new Date(utc).toISOString())
   console.log("iison ",date.toISOString())
   return date.toISOString()
 }

 const onSubmit = (data) => console.log(data)

  const title = [ {title:"Wedding 1",price: 300}, {title:"Wedding 2",price: 200}, {title:"Wedding 3",price: 400}, {title:"Wedding 4",price: 500}, {title:"Wedding 5",price: 500},{title:"Wedding 1",price: 300}, {title:"Wedding 2",price: 200}, {title:"Wedding 3",price: 400}, {title:"Wedding 4",price: 500}, {title:"Wedding 5",price: 500} ]
  const image = ["https://www.mospensstudio.com/blog/wordpress/wp-content/uploads/2013/10/wedding-couples.gif","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88328671-b213-4d9c-9577-b44c4b326e6d/df2pxv2-dd8eedb6-53b5-4b79-9555-bbce5c807a7b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg4MzI4NjcxLWIyMTMtNGQ5Yy05NTc3LWI0NGM0YjMyNmU2ZFwvZGYycHh2Mi1kZDhlZWRiNi01M2I1LTRiNzktOTU1NS1iYmNlNWM4MDdhN2IuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ldRZyqc0edB08h5aPU514SJqORk7qVghX6Onf7lIqIs"
                 ,"https://i.pinimg.com/originals/3a/78/7b/3a787b8a089c6c74da1a0fce6693f547.gif",
   "https://media4.giphy.com/media/1QCvI8Eb0ftEQlHXJT/giphy.gif?cid=6c09b952cv9agzh1z9a1zzuotejixcaj104rugh51ntr4h6t&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
            "https://img.freepik.com/free-vector/bride-groom-getting-married_23-2148404862.jpg",
            "https://www.mospensstudio.com/blog/wordpress/wp-content/uploads/2013/10/wedding-couples.gif","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88328671-b213-4d9c-9577-b44c4b326e6d/df2pxv2-dd8eedb6-53b5-4b79-9555-bbce5c807a7b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg4MzI4NjcxLWIyMTMtNGQ5Yy05NTc3LWI0NGM0YjMyNmU2ZFwvZGYycHh2Mi1kZDhlZWRiNi01M2I1LTRiNzktOTU1NS1iYmNlNWM4MDdhN2IuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ldRZyqc0edB08h5aPU514SJqORk7qVghX6Onf7lIqIs"
            ,"https://i.pinimg.com/originals/3a/78/7b/3a787b8a089c6c74da1a0fce6693f547.gif",
"https://media4.giphy.com/media/1QCvI8Eb0ftEQlHXJT/giphy.gif?cid=6c09b952cv9agzh1z9a1zzuotejixcaj104rugh51ntr4h6t&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
       "https://img.freepik.com/free-vector/bride-groom-getting-married_23-2148404862.jpg"];
  return (
    <main className="flex flex-col space-y-4 md:flex-row md:space-x-4 w-full md:w-full h-full font-Jost md:p-12 md:pt-0 bg-[url('./assets/image/header-white.jpg')] bg-center bg-cover">
          {/* card for form data */}
          <div className="w-full"
            >
            <form onSubmit={handleSubmit(onSubmit)}>
             <div className="text-3xl mb-4 text-center ">Booking</div>
             <div className="flex gap-12 w-full p-4">
         
               <div className="flex flex-col space-y-6 order-2 w-full">
               
                  <div className="flex justify-between">
                     <div className="text-2xl py-2">Select Package</div>
                     <div className="flex justify-center">
                           <Button>
                              Package
                           </Button>
                           <Button>
                              Custom
                           </Button>
                     </div>
                  </div>
                  
                  

                     {
                        image.map( (images, index) => 
                     //    <Swiper
                     //    // install Swiper modules
                     //    modules={[Navigation, Pagination, Scrollbar, A11y]}
                     //    spaceBetween={50}
                     //    slidesPerView={3}
                     //    navigation
                     //    pagination={{ clickable: true }}
                     //    scrollbar={{ draggable: true }}
                     //    onSwiper={(swiper) => console.log(swiper)}
                     //    onSlideChange={() => console.log('slide change')}
                     //  >
                        // <SwiperSlide>
                        <div className="flex flex-cols space-y-4 ">
                            <Card sx={{ display: 'flex', width:"100%" }}>
                              <CardMedia
                                 component="img"
                                 sx={{ width: 151 }}
                                 image={images}
                                 alt="Live from space album cover"
                                 />
                                 <Box sx={{ display: 'flex', flexDirection: 'column',  }}>
                                  
                                 <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
                                      {title[index].title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                       Price:${title[index].price}
                                    </Typography>
                                 </CardContent>
                                 </Box>
                              </Card>
                           {/* <Card >
                            <CardHeader
                              action={
                                 <IconButton aria-label="settings">
                                    <MdCheckBoxOutlineBlank/>
                                 </IconButton>
                              }
                              titleTypographyProps={{variant:'subtitle1' }}
                              title={title[index].title}
                              />
                           <CardMedia
                             component="img"
                             height="50"
                             width= "50"
                             image={images}
                             alt="Paella dish"
                           />
                           <CardContent>
                             <Typography variant="body2" color="text.secondary">
                              Price:${title[index].price}
                             </Typography>
                           </CardContent>
                          
                         </Card> */}
                        </div>
                     //     </SwiperSlide>
                     //  </Swiper>
                           
                     )
                        }
                    
               </div>
               <div className="flex flex-col space-y-6">
                   {/* Date and Time */}
               <div className="flex flex-col space-y-6 w-full">
                  <div className="text-2xl">Select Time</div>
                  <div className="flex-col space-y-6 ">
                     <div>
                       <Calendar  {...register("calendar", { required: true })} onChange={value => convertToISOString(value) }
                        className="react-calendar"/> 
                     </div>
                     <div>
                      <div className="flex flex-col justify-start items-start space-y-4">
                        <RadioGroup defaultValue="outlined" name="radio-buttons-group">
                           <div className="flex justify-center items-center space-x-2">
                             <Radio  {...register("time", { required: true })}  value="1" label="9:00 AM - 12:00 PM" variant="soft" /> 
                             <FormLabel>9:00 AM - 12:00 PM</FormLabel>
                           </div>
                           <div className="flex justify-center items-center space-x-2">
                             <Radio  {...register("time", { required: true })}  value="2" label="9:00 AM - 12:00 PM" variant="soft" /> 
                             <FormLabel>12:00 PM - 3:00 PM</FormLabel>
                           </div>
                           <div className="flex justify-center items-center space-x-2 mr-2">
                             <Radio  {...register("time", { required: true })}  value="3" label="9:00 AM - 12:00 PM" variant="soft" /> 
                             <FormLabel>3:00 PM - 5:00 PM </FormLabel>
                           </div>
                        </RadioGroup>
                        </div>
                     
                     </div>
                        
                  </div>
               </div>
               <div className="bg-white shadow-lg p-12">
               <div className="text-2xl">Add Your Detail</div>
               <div className="flex space-x-12"> 
               <div className="flex flex-col space-y-6  bg-white">
                   
                     <TextField
                        {...register("name", { required: true })} 
                        required
                        id="name"
                        sx={{ width: 300,outline: "none" }}
                        style ={{
                           outlineColor:"white"
                        }}
                        label="Name"
                        margin="none"
                        InputProps={
                           {
                              startAdornment: (
                                 <InputAdornment position="start">
                                    <IoPersonOutline />
                                 </InputAdornment>
                              ),
                           }
                        }
                        variant="standard"
                     />
                     <TextField
                        {...register("email", { required: true })} 
                        required
                        id="email"
                        type="email"
                        sx={{ width: 300,outline: "none" }}
                        style ={{
                           outlineColor:"white"
                        }}
                        label="Email"
                        margin="none"
                        InputProps={
                           {
                              startAdornment: (
                                 <InputAdornment position="start">
                                    <MdEmail />
                                 </InputAdornment>
                              ),
                           }
                        }
                        variant="standard"
                     />
                     <TextField
                        {...register("phone", { required: true })} 
                        required
                        id="phone"
                        sx={{ width: 300,outline: "none" }}
                        style ={{
                           outlineColor:"white"
                        }}
                        label="Phone"
                        type="tel"
                        margin="none"
                        InputProps={
                           {
                              startAdornment: (
                                 <InputAdornment position="start">
                                    <FaPhoneAlt />
                                 </InputAdornment>
                              ),
                           }
                        }
                        variant="standard"
                     />
                     <div className="flex flex-col space-y-6">
                      <TextField
                        {...register("address", { required: true })} 
                        required
                        id="address"
                        sx={{ width: 300,outline: "none" }}
                        style ={{
                           outlineColor:"white"
                        }}
                        label="Address"
                        margin="none"
                        InputProps={
                           {
                              startAdornment: (
                                 <InputAdornment position="start">
                                    <FaAddressCard />
                                 </InputAdornment>
                              ),
                           }
                        }
                        variant="standard"
                     />
                     <TextField
                        {...register("recommendation", { required: true })} 
                        required
                        id="recommendation"
                        classes="block md:hidden"
                        sx={{ width: 300,outline: "none" }}
                        style ={{
                           outlineColor:"white"
                        }}
                        label="Recommendation"
                        margin="none"
                        InputProps={
                           {
                              startAdornment: (
                                 <InputAdornment position="start">
                                    <MdRecommend />
                                 </InputAdornment>
                              ),
                           }
                        }
                        variant="standard"
                     />
                     </div>
                     
                     <div className="flex">
                        <button type="submit" className="bg-blue-600 flex p-2 text-white rounded-[10%]">Submit</button>
                     </div>
                     
               </div>
                {/* <div className="hidden md:block md:flex md:flex-col md:space-y-6">
                     <TextField
                        required
                        id="address"
                        sx={{ width: 300,outline: "none" }}
                        style ={{
                           outlineColor:"white"
                        }}
                        label="Address"
                        margin="none"
                        InputProps={
                           {
                              startAdornment: (
                                 <InputAdornment position="start">
                                    <FaAddressCard />
                                 </InputAdornment>
                              ),
                           }
                        }
                        variant="standard"
                     />
                     <TextField
                        required
                        id="recommendation"
                        sx={{ width: 300,outline: "none" }}
                        style ={{
                           outlineColor:"white"
                        }}
                        label="Recommendation"
                        margin="none"
                        InputProps={
                           {
                              startAdornment: (
                                 <InputAdornment position="start">
                                    <MdRecommend />
                                 </InputAdornment>
                              ),
                           }
                        }
                        variant="standard"
                     />
                  </div> */}
               </div>
               </div>
               </div>
             </div> 
      
          
             </form>
          </div>
    </main>
  );
};

export default Booking;