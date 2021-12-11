console.log('***** Music Collection *****')
//let collection = [];
//function addToCollection (title, artist, yearPublished){

//}



 let collection = [];

 function addToCollection( title, artist, yearPublished) {
   collection.push({title, artist, yearPublished});
   return {title, artist, yearPublished};
 }


 console.log( addToCollection('The Black Album', 'Metallica',
 1992));
 console.log( addToCollection('Pauls Boutique', 'Beastie Boys',
 1992));
 console.log( addToCollection( 'Dirt', 'Alice in Chains', 1991));
 console.log( addToCollection( 'Dont Rock The Jukebox',
 'Alan Jackson', 1991));
 console.log( addToCollection( 'No Fences', 'Garth Brooks', 1990));
console.log( addToCollection( 'Nevermind', 'Nirvana', 1991));





 function findBy(artist) {

    var parallel = [];

    for ( let i = 0; i < collection.length; i++) {

        if (collection[i].artist === artist) {
          parallel.push(collection[i].title);
          parallel.push(collection[i].yearPublished);
          parallel.push(collection[i].artist);
          // return [collection[i].title];
        }
    }

    return parallel;
  }
console.log (findBy ('Garth Brooks'));
