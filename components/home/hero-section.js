import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

/* eslint-disable @next/next/no-img-element */



const HeroSection = () => {

  return (
      <div className="fugu-hero-section" id="heroSection">
           <Image
           style={{zIndex:"-9999"}}
          src="/images/test/main_background.png"
          alt="메인 배경 이미지"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="custom-visi-float-sm-square">
          <Image src="/images/float/vi_square_small_float.png" alt="" fill />
        </div>
        <div className="custom-invi-float-sm-square">
          <img src="/images/float/invi_square_small_float.png" alt="" fill />
        </div>
        <div className="custom-visi-float-lg-square">
          <Image src="/images/float/vi_square_large_float.png" alt="" fill />
        </div>
        <div className="custom-invi-float-lg-square">
          <img src="/images/float/invi_square_large_float.png" alt="" fill />
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6
					"
            >
              <div  className="fugu-hero-content">
                <h1 data-wow-delay="0s">
                  쇼핑도
                  <br />
                  게임처럼 재밌게
                </h1>
                <div className="divider"></div>
                <h3 className="custom-white-detail" data-wow-delay="0.25s">
                  신개념 명품 플랫폼 캐치유!
                  <br />
                  가품걱정, 배송걱정, 시간낭비는 이제 그만! <br />
                  이젠 캐치유에서 쉽고 편하고 재밌게 명품 쇼핑하자!
                </h3>
                <div
                  className="fugu-app-btn-wrap wow fadeInUpX"
                  data-wow-delay="0.40s"
                >
                  <Link href={"contact"} legacyBehavior>
                    <a className="fugu-app-btn">
                      <img src="/images/all-img/app-store.png" alt="title" />
                    </a>
                  </Link>
                  <Link href={"contact"} legacyBehavior>
                    <a className="fugu-app-btn">
                      <img src="/images/all-img/play-store.png" alt="title" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 col-12">
              <div className="fugu-hero-thumb">
                <video src="/video/first.webm" loop autoPlay muted />
                {/* <img src="/images/test/Vectary texture.png" alt="title" /> */}
                {/* <div className="custom-float-icon-axe">
								<img src="/images/float/axe_float.png" alt="" />
							</div>
							<div className="custom-float-icon-heart">
								<img src="/images/float/heart_float.png" alt="" />
							</div>
							<div className="custom-float-icon-book">
								<img src="/images/float/book_float.png" alt="" />
							</div>
							<div className="custom-float-icon-no1">
								<img src="/images/float/no1_float.png" alt="" />
							</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default HeroSection;