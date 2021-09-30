import React from 'react';
import '../../Gallery.css';
import GalleryItem from '../../Galleryitem';



function YokeshGallery() {
    return (
        <div className="gallery">
        <h1>Gallery</h1>
        <div className="gallery__container">
            <div className="gallery__wrapper">
            <ul className="gallery__items">
                <GalleryItem
                src="images/img-5.jpg"
                label="Cover"
                path="/"
                />
            </ul>
                <ul className="gallery__items">
                    <GalleryItem
                    src="images/yokesh.jpg" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/yokesh.jpg" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/yokesh.jpg" 
                    label="mass"
                    path="/"
                    />
                </ul>
                <ul className="gallery__items">
                    <GalleryItem
                    src="images/yokesh.jpg" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/yokesh.jpg" 
                    label="mass"
                    path="/"
                    />
                </ul>
                <ul className="gallery__items">
                    <GalleryItem
                    src="images/yokesh.jpg" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/yokesh.jpg" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/yokesh.jpg" 
                    label="mass"
                    text="g f g fg dfgerdfgdfv sdwq erd ghxcf v fewfrwefwerf rte y tyt rtyrth y"
                    path="/"
                    />
                </ul>
            </div>
        </div>
        </div>
    )
}

export default YokeshGallery
