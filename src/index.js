import React from 'react';//import react from dependancies
import reactDom from 'react-dom';//injects this component into the root div (ReactDOM does this)
import './index.css' //attach css file. file in same folder

//ho to change values based on what we pass in.
//1) move Varibles to top.
//2)refactor into object
const book1 = {
    title : '100 Year old man',
    image : 'https://m.media-amazon.com/images/I/51ZaRaeSoaL.jpg',
    author : 'Jonas Jonasson' ,
    price : 12.99
}
const book2 = {
    title : 'The Orphan Masters Son',
    image : 'https://images-na.ssl-images-amazon.com/images/I/5142MKS0zWL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    author : 'Adam Johnson' ,
    price : 15.99
}
//Where we render books is here
//this is where you can change the object of props to have value and not be empty

// so the price of the books props are change and then then to render the books
// we do props.price which displays the price of the respective books.
//The properties (props) have been changed in the render by assigning the props an object value then 
//thos individual prices have been displayed and accessed using props.price which
// the component book props must match what you have entered in the function's prop values to render what you want in the object
function BookList() {
  return (
    <section className="booklist">
      <Book 
        image={book1.image} 
        title={book1.title} 
        author={book1.author} 
        price={book1.price}
      />
      <Book 
        image={book2.image} 
        title={book2.title} 
        author={book2.author} 
        price={book2.price}
      />
      <Book/>
    </section>
    );
}

//How do we pass unique values to Book? so its not all the same?
//Book is a function it therefore can take arguments and parameters.
// parameters go in the (), props = properties. Just a naming convention

//this is where we access props.

//Book COmponent
const Book = (props) => {
    console.log('props');//see what the value of props is
    //Ans: Props is an object
  return <article className="book">
    <img src={props.image}/>
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
    <p>{props.price}</p>
    
  </article>
}
//ALL COMPONENETS:

//1) what we are going to render "Greetings" component 2)Where to render
reactDom.render(<BookList />, document.getElementById('root'))

//OTHER WAYS OF ACESSING PROPS:

//props can be acessed three ways 
// 1)passing props and having props.
// 2)pass props but define constant to not do props.x
// 3)define toe properties of the object in the ()


// const Book = (props) => {
// const {image, title, author, price = 'props}   <- set as properties to be accessed
//   return <article className="book">
//     <img src={image}/>
//     <h1>{title}</h1>
//     <h4>{author}</h4>
//     <p>{price}</p>
//   </article>
// }

//OR

// const Book = ({image, title, author, price}) => { <- set as properties to be accessed
//   return <article className="book">
//     <img src={image}/>
//     <h1>{title}</h1>
//     <h4>{author}</h4>
//     <p>{price}</p>
//   </article>
// }