import React, { Component } from "react";
import { Link } from "react-router-dom";
import Elo4Bannner from "../../imagens/banners/Slider2.png";
import Cosmetic from "../../imagens/banners/Slider1.png";
import Botanical from "../../imagens/banners/Slider3.png";
import Eyewear from "../../imagens/banners/Slider4.png";
import Fitness from "../../imagens/banners/Slider5.png"
import styled from "styled-components";
import "antd/dist/antd.css";
import { Carousel } from "antd";

const contentStyle = {
  width: "100%",
  color: "#000",
  lineHeight: "60vh",
  textAlign: "center",
  margin: "auto",
  background: "green"
};


const BannerImage = styled.img`
  object-fit: cover;
`



class SliderHome extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay>
          <div>
              <BannerImage src={Elo4Bannner} alt="banner_elo4" style={contentStyle} />
          </div>
          <div>
              <BannerImage src={Cosmetic} alt="cosmetic-banner" style={contentStyle} />
          </div>
          <div>
              <BannerImage src={Botanical} alt="botanical-banner" style={contentStyle} />
          </div>
          <div>
              <BannerImage src={Eyewear} alt="eyewear-banner" style={contentStyle} />
          </div>
          <div>
              <BannerImage src={Fitness} alt="fitness-banner" style={contentStyle} />
          </div>
        </Carousel>


      </div>
    );
  }
}

export default SliderHome;
