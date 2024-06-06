function Gallary(){
    const images = [
        { src: 'path/to/image1.jpg', alt: 'Image 1' },
        { src: 'path/to/image2.jpg', alt: 'Image 2' },
        { src: 'path/to/image3.jpg', alt: 'Image 3' },
        { src: 'path/to/image4.jpg', alt: 'Image 4' },
        { src: 'path/to/image5.jpg', alt: 'Image 5' },
        { src: 'path/to/image6.jpg', alt: 'Image 6' },
      ];
    return(
  <>
   <div className="container mt-5">
      <h2 className="text-center">Gallery</h2>
      <div className="row">
        {images.map((image, index) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={image.src} className="card-img-top" alt={image.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
    )
};
export default Gallary;