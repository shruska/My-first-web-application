let data = {
	photo: 'images/Photo1.jpg',
	title: 'Bubbles',
	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum.',
}

let data2 = {
	photo: 'images/Photo2.jpg',
	title: 'Universe',
	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum. amet consectetur adipisicing elit. Veniam, rerum.',
}

let data3 = {
	photo: 'images/Photo3.jpg',
	title: 'OuterSpace',
	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum.ctetur adipisicing elit. Veniam, rerum',
}

let data4 = {
	photo: 'images/Photo4.jpg',
	title: 'Boat',
	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerumLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum',
}

let data5 = {
	photo: 'images/Photo5.jpg',
	title: 'Tropical Iland',
	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum.',
}

let data6 = {
	photo: 'images/Photo6.jpg',
	title: 'Stones',
	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum.',
}

let data7 = {
	photo: 'images/Photo7.jpg',
	title: 'Thunder',
	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum.',
}

let data8 = {
	photo: 'images/Photo8.jpg',
	title: 'Old Tree',
	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum.',
}



let currentPhoto = 0;
let imagesData = [data, data2, data3, data4, data5, data6, data7, data8];

let loadPhoto = (photoNumber) => {
$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').text(imagesData[currentPhoto].title);
$('#photo-description').text(imagesData[currentPhoto].description);

}

loadPhoto(currentPhoto);


$('.Right-arrow').click(() => {
	if (currentPhoto<imagesData.length -1) {
	currentPhoto++;
	} else {
		currentPhoto = 0
	}
	loadPhoto(currentPhoto);
  })

  $('.Left-arrow').click(() => {
	if (currentPhoto>0) {
		currentPhoto--;
	} else {
		currentPhoto = 7
	}
	loadPhoto(currentPhoto);	
  })



/* ------------------ Thumbnail --------------------------*/

 
imagesData.forEach((item ,index) => {
	$('.container2').append(`<img src="${imagesData[index].photo}" class="thumbnails-img" data-index="${index}"> `);
	
  
	 $('.thumbnails-img').click((event) => {
	  let indexClicked = $(event.target).attr('data-index');
  
	  let numberIndex = parseInt(indexClicked);
  
	  currentPhoto = numberIndex
  
	 loadPhoto(currentPhoto);
	});
  });
  
  /* ------------------ Thumbnail --------------------------*/
