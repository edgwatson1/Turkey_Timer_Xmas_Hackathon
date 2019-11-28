import React from "react";
import "./PositiveResult.css";
import Button from "../auxiliaries/button";
import { Switch, Route, withRouter, Link } from "react-router-dom";

class PositiveResult extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.incrementStreak();
  }

  render() {

const turkeyPictureArray = ["https://res.cloudinary.com/edwardwatson/image/upload/v1574956965/TurkeyTimer/turkey17_br3j7p.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956965/TurkeyTimer/turkey16_nodopr.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956965/TurkeyTimer/turkey15_l5lm1u.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956965/TurkeyTimer/turkey19_uiglfq.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956965/TurkeyTimer/turkey14_rwljad.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956965/TurkeyTimer/turkey18_nsbmcz.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956965/TurkeyTimer/turkey13_lnsjqr.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956964/TurkeyTimer/turkey10_h7q0lw.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956964/TurkeyTimer/turkey9_fqsryw.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956964/TurkeyTimer/turkey6_krz51p.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956964/TurkeyTimer/turkey12_yk5jt9.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956964/TurkeyTimer/turkey11_fvkrh2.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956964/TurkeyTimer/turkey7_gxy7zt.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956964/TurkeyTimer/turkey8_ricwdy.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956963/TurkeyTimer/turkey5_vw815j.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956964/TurkeyTimer/turkey0_aroxtt.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956964/TurkeyTimer/turkey4_osay7z.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956963/TurkeyTimer/turkey2_u78tsz.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956963/TurkeyTimer/turkey1_ilt5sf.png","https://res.cloudinary.com/edwardwatson/image/upload/v1574956963/TurkeyTimer/turkey3_ou7jkh.png"]

const h1Celebration=["A fantastic day! ⭐","A special moment! ⭐","A brillaint dinner! 😋","A Christmas lunch like no other! 🥇","A superb turkey! 😋","A perfect bird! 😋","Succulent and tasty! 😋","An amazing roast! 😋","A special Christmas! ⭐","A tasty roast! 🎉","Such tasty turkey! 😋","Yum yum! 😋","What a meal! ⭐","A brilliant Christmas! ⭐","Perfectly done! ⭐","Congratulations! 🍾","Wow! ⭐","It's just so tasty! 😋","Are you a professional chef?! 😋","Just... wow! So tasty. 😋","Just... yummy! 😋"]

const h2Celebration=["Nobody can stop talking about how tasty your turkey was. It was perfectly cooked!","You cooked the turkey perfectly. Everyone said it was brillaint!","This might be the best Christmas ever thanks to your turkey!","The turkey out of this world! 🚀 This is the best Christmas ever!","The turkey was so good, your family want you to become a professional chef!","You cooked the turkey for exactly the right time! ✅","Jamie Oliver just called... he said your turkey was perfect! 👌","The turkey was just brilliant. Everyone had seconds!","Cooking a turkey well isn't easy - but you did it excellently!","Turkey is usually a dry meat. But not today. You cooked it brilliantly.","Wow! You roasted the best turkey ever!","You make roasting look easy! You made such a tasty bird.","Perfectly roasted! The meat melts in your mouth.","Perfectly cooked! Succulent and flavoursome.","Perfectly cooked! It's the best meal everyone's had all year!","The turkey was brilliant. There are no leftovers because everyone had seconds!","A lovely roast. Your family are happy and you deserve a rest!","Roasting comes easy to you! The Christmas turkey was perfect!","Th yule bird was perfectly roasted. The taste was incredible.","Congratulations! You made the tastiest turkey anyone's ever eaten!","You roasted your turkey for the perfect time and the whole family loved it."]


    return (
      <>
        <audio
          src="https://res.cloudinary.com/edwardwatson/video/upload/v1574935493/TurkeyTimer/415510__inspectorj__bell-counter-a_lqwgpy.wav"
          autoPlay
        />

        <h1>{h1Celebration[Math.ceil(Math.random() * 19)]}</h1>
        <h2>
          {h2Celebration[Math.ceil(Math.random() * 19)]}
        </h2>
        <div id="turkeyresult">
          <img src={turkeyPictureArray[Math.ceil(Math.random() * 19)]}></img>
        </div>
        <h1>Cooking streak: {this.props.streak}</h1>
        <Link to="/turkeyweigh">
          <Button message="Continue streak!" />
        </Link>
        <p> </p>
      </>
    );
  }
}

export default PositiveResult;
