import React from 'react';
import '../../Gallery.css';
import GalleryItem from '../../Galleryitem';

function HariGallery() {
    return (
        <div className="gallery">
        <h1>Gallery</h1>
        <div className="gallery__container">
            <div className="gallery__wrapper">
            <ul className="gallery__items">
                <GalleryItem
                src="images/hari/hari-1.jpg"
                label="Cover"
                path="/"
                />
            </ul>
                <ul className="gallery__items">
                    <GalleryItem
                    src="images/hari/hari-1.jpg" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/hari/hari-2.jpg" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/hari/hari-3.jpg" 
                    label="mass"
                    path="/"
                    />
                </ul>
                <ul className="gallery__items">
                    <GalleryItem
                    src="images/hari/hari-4.jpeg" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/hari/hari-5.jpeg" 
                    label="mass"
                    path="/"
                    />
                </ul>
                <ul className="gallery__items">
                    <GalleryItem
                    src="images/hari/hari-6.jpeg" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/hari/hari-7.jpeg" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/hari/hari-8.jpeg" 
                    label="mass"
                    text="g f g fg dfgerdfgdfv sdwq erd ghxcf v fewfrwefwerf rte y tyt rtyrth y"
                    path="/"
                    />
                </ul>
                <ul className="gallery__items">
                <GalleryItem
                src="images/hari/hari-10.jpeg"
                label="Cover"
                path="/"
                />
            </ul>
            <ul className="gallery__items">
                    <GalleryItem
                    src="images/hari/hari-11.jpg" 
                    label="mass"
                    path="/"
                    />
                    <GalleryItem
                    src="images/hari/hari-11.jpg" 
                    label="mass"
                    path="/"
                    />
                </ul>
            </div>
        </div>
        </div>
    )
}

export default HariGallery
