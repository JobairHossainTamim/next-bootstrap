import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
   <main>
    <div className="hero-section section">
      <div className="container">
        <div className="row">

        <div className="col-lg-6">

          <h1>Next js is Awesome </h1>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.       </p>
          <button className="btn btn-warning mx-1">Read More</button>
          <button className="btn btn-outline-secondary mx-1">Read More</button>

        </div>
        <div className="col-lg-6">



        </div>
          
        </div>
      </div>
    </div>
   </main>
  );
}
