import { Box, Dialog, DialogContent, Grid, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";
import { GalleryInputs } from "../util/inputs";
import { AiOutlineClose } from "react-icons/ai";

interface ImageGalleryProps {
    inputs: GalleryInputs;
}
  
const ImageGallery = ({inputs} : ImageGalleryProps) => {

const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
const images = inputs.images;

const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
};

const handleClose = () => {
    setSelectedImageIndex(null);
};

const showNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex !== null ? (prevIndex + 1) % images.length : null));
};

const showPreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
    prevIndex !== null ? (prevIndex - 1 + images.length) % images.length : null
    );
};

return (
    <Box sx={{
        paddingX: "0",
        paddingBottom: '6px',
    }}>
        <Typography sx={{paddingTop: '80px', paddingBottom: '16px'}} variant="h4">
            {inputs.title}
        </Typography >
        <Typography sx={{paddingBottom: '16px', paddingLeft: '10px', paddingRight: '10px'}}>
            {inputs.description}    
        </Typography>
        <Grid 
            container 
            // spacing={2}
        >
            {images.map((image, index) => (
            <Grid 
                item 
                xs={12} 
                sm={6} 
                key={index}
            >
                <Box
                component="img"
                src={image}
                alt={`Image ${index + 1}`}
                width="100%"
                height={'200px'}
                sx={{
                    objectFit: "cover", // Crop the image to fit the box
                    cursor: "pointer",
                    // borderRadius: "8px",
                }}
                onClick={() => handleImageClick(index)}
                />
            </Grid>
            ))}
        </Grid>


        <Dialog 
            open={selectedImageIndex !== null} 
            onClose={handleClose} 
            maxWidth={false} 
            sx={{ 
                "& .MuiDialog-paper": { 
                    width: "100vw", 
                    height: "100vh", 
                    margin: 0,
                    padding: 0,
                    maxWidth: "100vw",
                    maxHeight: "100vh",
                    borderRadius: 0, 
                    backgroundColor: "rgba(0, 0, 0, 0.6)"
                } 
            }}
        >
            <DialogContent
                sx={{
                    position: "relative",
                    padding: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100vw",
                    height: "100vh",
                }}
            >
                <IconButton
                    onClick={showPreviousImage}
                    sx={{
                        position: "absolute",
                        left: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "white",
                        color: "#676634",
                        "&:hover": {
                            backgroundColor: "#e0e0e0",
                        },
                        borderRadius: "50%",
                        padding: "8px",
                    }}
                >
                    <BiArrowBack color="red" />
                </IconButton>

                {selectedImageIndex !== null && (
                    <Box
                        component="img"
                        src={images[selectedImageIndex]}
                        alt="Selected"
                        sx={{
                            width: "100vw",
                            height: "auto",
                            maxHeight: "100vh",
                            objectFit: "contain",
                        }}
                    />
                )}

                <IconButton
                    onClick={showNextImage}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "white",
                        color: "#676634",
                        "&:hover": {
                            backgroundColor: "#e0e0e0",
                        },
                        borderRadius: "50%",
                        padding: "8px",
                    }}
                >
                    <IoArrowForward />
                </IconButton>

                <IconButton
                    onClick={handleClose}
                    sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    backgroundColor: "white",
                    color: "#676634",
                    "&:hover": {
                        backgroundColor: "#e0e0e0",
                    },
                    borderRadius: "50%",
                    padding: "8px",
                    }}
                >
                    <AiOutlineClose />
                </IconButton>
            </DialogContent>
        </Dialog>
    </Box>
);
};

export default ImageGallery;