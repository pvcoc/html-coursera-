(function(){
    "usestrict";
    const myimages=['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
    let currentImage=0

    document.getElementById('next').onclick=nextphoto;

    document.getElementById('previous').onclick=previousphoto;

    function nextphoto(){
        currentImage++;

        if (currentImage>myimages.length-1) {currentImage=0}

        document.getElementById('myimage').src=myimages[currentImage];

    }
    function previousphoto()

    {currentImage--;

    if (currentImage<0) {currentImage=myimages.length-1;}
    
    document.getElementById('myimage').src=myimages[currentImage];

    }
})