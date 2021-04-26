
// function for product pictures
// returns array of all maped pictures from req.files

export const productPictures  = pictures => {
    const picturesList = []
    if(pictures.length >= 0){
        pictures.map(picture => {
            picturesList.push({img : picture.filename})
        })

        return picturesList
    }
}