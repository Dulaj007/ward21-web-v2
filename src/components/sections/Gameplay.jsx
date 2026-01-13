import React, { useState } from "react";
import GameAlbum from "../ui/GameAlbum";
import bgImage from "../../assets/img/bgs.png";
// gameplay images
import img1 from "../../assets/img/gameplay/im1.png";
import img2 from "../../assets/img/gameplay/im2.png";
import img3 from "../../assets/img/gameplay/im3.png";
import img4 from "../../assets/img/gameplay/im4.png"; 
import img5 from "../../assets/img/gameplay/im5.png";
import img6 from "../../assets/img/gameplay/im6.png";
import img7 from "../../assets/img/gameplay/im7.png";
import img8 from "../../assets/img/gameplay/im8.png";
import img9 from "../../assets/img/gameplay/im9.png";
import img10 from "../../assets/img/gameplay/im10.png";
import img11 from "../../assets/img/gameplay/im11.png";
import img12 from "../../assets/img/gameplay/im12.png";
import img13 from "../../assets/img/gameplay/im13.png";
import img14 from "../../assets/img/gameplay/im14.png";
import img15 from "../../assets/img/gameplay/im15.png";
import img16 from "../../assets/img/gameplay/im16.png";
import img17 from "../../assets/img/gameplay/im17.png";
import img18 from "../../assets/img/gameplay/im18.png";
import img19 from "../../assets/img/gameplay/im19.png";
import img20 from "../../assets/img/gameplay/im20.png";
import img21 from "../../assets/img/gameplay/im21.png";
import img22 from "../../assets/img/gameplay/im22.png";
import img23 from "../../assets/img/gameplay/im23.png";
import img24 from "../../assets/img/gameplay/im24.png";



const Gameplay = () => {


  return (
    <section
      className="relative bg-cover bg-center "
            style={{ backgroundImage: `url(${bgImage})` }}
    >
      <GameAlbum images={[img7,img8, img9, img10,img11,img6, img12,img1, img2, img3,img4, img5,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24]} />
      {/* Dark overlay */}
   
 <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent " />
     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent " />
    </section>
  );
};

export default Gameplay;
