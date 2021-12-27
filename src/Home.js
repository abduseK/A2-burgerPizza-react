import { useState } from "react";
import img1 from './images/Burger1.jpg';
import img2 from './images/Burger2.jpg';

const Home = () => {


    return (

        <html lang="en">
<head>
    <title>A2 burger and pizza</title>
</head>
<body>

    <div className="banner">

        <div className ="navbar">
            <h1 className ="as-logo">A2 <span className="small-logo">burger and pizza</span> </h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Order</a></li>
            </ul>
        </div>

        <div className ="content">
            <h1>We are A2, Order us</h1>
            <p>Order and taste our burgers and pizzas prepared by our proud chefs</p>
            <div>
                <button type="button"><span className ="bt-span"></span>ORDER US</button>
                <button type="button"><span className="bt-span"></span>LET'S EAT</button>
            </div>
        </div>

    </div>


    
</body>
</html>
        

        // <div className="home">

        //     <img src={ img2 } className="firstImage"></img>

        //     <div className="header">
        //         <li>
        //         <h3>Welcome to <span>A2</span> Burger and Pizza</h3>
        //         <a href="/" target="_blank" className="eat-btn">Let's Eat</a>
                

        //         </li>
        //     </div>

        //     <div className="image-lists">
        //     <li className="listImage">
        //         <ul>
        //         <img src={img1} className="imageOne"></img>
        //         <img src={img1} className="imageTwo"></img>
        //         <img src={img1} className="imageThree"></img>
        //         <img src={img1} className="imageFour"></img>
        //         <a href="/" className="photoLink"><img src={img1} className="imageFour"></img></a>
        //         </ul>
        //     </li>
        //     </div>
            
        //     <div className="blog-lists">

        //     {blogs.map((blog) => (
        //        <div className="list-content" key={blog.id}>
        //            <h2>{ blogs.title }</h2>
        //            <p>written by { blogs.author} </p>
        //        </div>
        //    ))}
        //     </div>
            
           
        // </div>

    );
}
 
export default Home;