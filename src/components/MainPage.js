import React, { useState, useEffect, Component } from "react";
import "./styles.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "react-circular-progressbar/dist/styles.css";
export const MainPage = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [countDownTimer, setCountDownTimer] = useState(60);
  useEffect(() => {
    if (countDownTimer == 0) setCountDownTimer(60);
    countDownTimer > 0 &&
      setTimeout(() => setCountDownTimer(countDownTimer - 1), 1000);
  }, [countDownTimer]);
  const onThemeButtonClick = () => {
    setIsLightTheme(!isLightTheme);
  };
  return (
    <React.Fragment>
      <div className={"theme-" + (isLightTheme ? "light" : "dark")}>
        <Header
          isLightTheme={isLightTheme}
          onThemeButtonClick={onThemeButtonClick}
          countDownTimer={countDownTimer}
        />
        <div class="Container-fluid " style={{ padding: "0px 30px" }}>
          <div
            class="d-flex justify-content-around align-items-center average-header"
            style={{ padding: "10px 0px" }}
          >
            <div class="text-center">
              <div class="average-header-maintext color-green">0.1 %</div>
              <div class="average-header-subHeading">5 Mins</div>
            </div>
            <div class="text-center">
              <div class="average-header-maintext color-green">0.96 %</div>
              <div class="average-header-subHeading">1 Hour</div>
            </div>
            <div style={{ "max-width": "40%" }}>
              <div class="text-center font-32 average-block">
                <div class="average-subText">
                  <span class="subText-heading">Best Price to Trade</span>
                </div>
                <div
                  class="average-heading"
                  style={{ "padding-bottom": "10px" }}
                >
                  ₹ 26,56,110
                </div>
                <div class="average-subText">
                  Average RTH/INR net price including commission
                </div>
              </div>
            </div>
            <div class="text-center">
              <div class="average-header-maintext color-green">2.73 %</div>
              <div class="average-header-subHeading">1 Day</div>
            </div>
            <div class="text-center">
              <div class="average-header-maintext color-green">7.51 %</div>
              <div class="average-header-subHeading">7 Days</div>
            </div>
          </div>
          {/* <a target="_blank" href="https://finstreet.in/">
            <img
              src="cryptonews.png"
              style={{ width: "100%", padding: "0px 0px 20px" }}
            />
          </a> */}
        </div>
        <div
          class="fiat-crypto-table table-responsive"
          style={{ margin: "0px auto" }}
        >
          <table class="table table-borderless text-center">
            <thead>
              <tr>
                <th>
                  <h4>
                    <span class="pointer">#</span>
                  </h4>
                </th>
                <th>
                  <h4>
                    <span class="pointer">Platform</span>
                  </h4>
                </th>
                <th>
                  <h4>
                    <span class="pointer">Last Traded Price</span>
                  </h4>
                </th>
                <th>
                  <h4>
                    <span class="pointer">Buy / Sell Price</span>
                  </h4>
                </th>
                <th>
                  <h4>
                    <span class="pointer">Difference</span>
                  </h4>
                </th>
                <th>
                  <h4>
                    <span class="pointer">Savings</span>
                  </h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="align-middle">
                  <h4 class="table-text">1</h4>
                </td>
                <td class="align-middle">
                  <a target="_blank" href="">
                    <h4 class="table-text">
                      <img src="wazix.png" class="exchange-logo"></img>{" "}
                      <span class="exchange-name ">WazirX</span>
                    </h4>
                  </a>
                </td>
                <td class="align-middle">
                  <h4 class="table-text">₹ 25,72,612</h4>
                </td>
                <td class="align-middle">
                  <h4 class="table-text">
                    <span>₹ 25,72610 / ₹ 25,72,612</span>
                  </h4>
                </td>
                <td class="align-middle">
                  <h4 class="table-text color-green">-3.14 %</h4>
                </td>
                <td class="align-middle">
                  <h4 class="table-text color-green">▼ ₹ 83,498</h4>
                </td>
              </tr>
              <tr>
                <td class="align-middle">
                  <h4 class="table-text">2</h4>
                </td>
                <td class="align-middle">
                  <a target="_blank" href="https://bit.ly/2BJxccc">
                    <h4 class="table-text">
                      <img src="bitbns.png" class="exchange-logo" />
                      <span class="exchange-name ">Bitbns</span>
                    </h4>
                  </a>
                </td>
                <td class="align-middle">
                  <h4 class="table-text">₹ 28,83,906</h4>
                </td>
                <td class="align-middle">
                  <h4 class="table-text">
                    <span>₹ 28,55,164 / ₹ 28,82,157</span>
                  </h4>
                </td>
                <td class="align-middle">
                  <h4 class="table-text color-green">8.58 %</h4>
                </td>
                <td class="align-middle">
                  <h4 class="table-text color-green">▲ ₹ 2,27,796</h4>
                </td>
              </tr>
              <tr>
                <td class="align-middle">
                  <h4 class="table-text">3</h4>
                </td>
                <td class="align-middle">
                  <a target="_blank" href=" ">
                    <h4 class="table-text">
                      <img src="giotus.png" class="exchange-logo" />
                      <span class="exchange-name ">Colodax</span>
                    </h4>
                  </a>
                </td>
                <td class="align-middle">
                  <h4 class="table-text">₹25,46,035 </h4>
                </td>
                <td class="align-middle">
                  <h4 class="table-text">
                    <span>₹ 25,33,304 / ₹28,51,559 </span>
                  </h4>
                </td>
                <td class="align-middle">
                  <h4 class="table-text color-green">-4.14 %</h4>
                </td>
                <td class="align-middle">
                  <h4 class="table-text color-green">▼ ₹ 1,10,074</h4>
                </td>
              </tr>
              {/* <tr>
                <td class="align-middle">
                  <h4 class="table-text">4</h4>
                </td>
                <td class="align-middle">
                  <a target="_blank" href=" ">
                    <h4 class="table-text">
                      <img src="colodax.png" class="exchange-logo" />
                      <span class="exchange-name ">Colodax</span>
                    </h4>
                  </a>
                </td>
                <td class="align-middle">
                  <h4 class="table-text">₹ 1,08,675</h4>
                </td>
                <td class="align-middle">
                  <h4 class="table-text">
                    <span>₹ 1,08,675 / ₹ 1,10,469</span>
                  </h4>
                </td>
                <td class="align-middle">
                  <h4 class="table-text color-red">-35.06 %</h4>
                </td>
                <td class="align-middle">
                  <h4 class="table-text color-red">▼ ₹ 58,659</h4>
                </td>
              </tr> */}
              <tr>
                <td class="align-middle">
                  <h4 class="table-text">4</h4>
                </td>
                <td class="align-middle">
                  <a target="_blank" href="">
                    <h4 class="table-text">
                      <img src="zebpay.png" class="exchange-logo" />
                      <span class="exchange-name">Zebpay</span>
                    </h4>
                  </a>
                </td>
                <td class="align-middle">
                  <h4 class="table-text">₹ 26,50,000</h4>
                </td>
                <td class="align-middle">
                  <h4 class="table-text">
                    <span>₹ 26,49,999 / ₹ 26,21,000</span>
                  </h4>
                </td>
                <td class="align-middle">
                  <h4 class="table-text color-green">-0.23 %</h4>
                </td>
                <td class="align-middle">
                  <h4 class="table-text color-green">▼ ₹ 6,110</h4>
                </td>
              </tr>
              {/* <tr>
                <td class="align-middle">
                  <h4 class="table-text">6</h4>
                </td>
                <td class="align-middle">
                  <a target="_blank" href=" ">
                    <h4 class="table-text">
                      <img src="coibdcx.png" class="exchange-logo" />
                      <span class="exchange-name">CoinDCX</span>
                    </h4>
                  </a>
                </td>
                <td class="align-middle">
                  <h4 class="table-text">₹ 1,77,959</h4>
                </td>
                <td class="align-middle">
                  <h4 class="table-text">
                    <span>₹ 1,77,959 / ₹ 1,78,763</span>
                  </h4>
                </td>
                <td class="align-middle">
                  <h4 class="table-text color-green">6.35 %</h4>
                </td>
                <td class="align-middle">
                  <h4 class="table-text color-green">▲ ₹ 10,624</h4>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
        {/* <div class="padding-header" style={{ padding: "20px" }}>
          <a target="_blank" href="https://ftx.com/#a=finstreet">
            <img src="BannerFTXNews.png" style={{ width: "100%" }} />
          </a>
        </div> */}
        <Footer />
        <div
          class="d-flex justify-content-center"
          style={{
            border: "solid 1px #191d28",
            "background-color": "#191d28",
            position: "fixed",
            left: "0",
            "align-items": "center",
            width: "100vw",
            height: "47px",
            bottom: "0",
            "z-index": "8",
          }}
        >
          <button
            class="add-button btn btn-outline-info"
            style={{ display: "block" }}
          >
            Add hodlinfo to home screen
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
