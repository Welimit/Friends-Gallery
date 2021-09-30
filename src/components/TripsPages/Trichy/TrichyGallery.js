import React from 'react';
import '../../Gallery.css';
import GalleryItem from '../../Galleryitem';



function TrichyGallery() {
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
                    src="images/trichy/trichy-1.jpg" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/trichy/trichy-2.jpg" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/trichy/trichy-3.jpeg" 
                    label="mass"
                    path="/"
                    />
                </ul>
                <ul className="gallery__items">
                    <GalleryItem
                    src="images/trichy/trichy-4.jpg" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/trichy/trichy-5.jpg" 
                    label="mass"
                    path="/"
                    />
                </ul>
                <ul className="gallery__items">
                    <GalleryItem
                    src="images/trichy/trichy-6.jpg" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/trichy/trichy-7.jpg" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/trichy/trichy-8.jpg" 
                    label="mass"
                    text="g f g fg dfgerdfgdfv sdwq erd ghxcf v fewfrwefwerf rte y tyt rtyrth y"
                    path="/"
                    />
                </ul>
                <ul className="gallery__items">
                    <GalleryItem
                    src="images/trichy/trichy-9.jpg" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/trichy/trichy-11.jpg" 
                    label="mass"
                    path="/"
                    />
                </ul>
                <ul className="gallery__items">
                <GalleryItem
                src="images/trichy/trichy-10.jpg"
                label="Cover"
                path="/"
                />
                </ul>
                <ul className="gallery__items">
                    <GalleryItem
                    src="images/trichy/trichy-12.jpg" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/trichy/" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/trichy/" 
                    label="mass"
                    path="/"
                    />
                </ul>
            </div>
        </div>
        </div>
    )
}

export default TrichyGallery
