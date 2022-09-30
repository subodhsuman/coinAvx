<template>
  <div class="home">
    <BannerComponent />
    <!-- __________________banner section end__________________ -->
    <section class="crypto_popular">
      <div class="container">
        <div class="row my-5 align-items-center before_background px-4">
          <div class="col-md-12 col-lg-6 col-xl-6">
            <div class="popular_heading">
              <h2 class="text-capitalize">
                be smart and <span>simplify </span><br />
                your
                <span
                  >trading<img
                    src="@/assets/images/landing-page/banner/star1.png"
                    alt="star"
                    class="img-fluid"
                /></span>
              </h2>
            </div>
          </div>
          <!-- _______________popular_heading_______________ -->
          <div class="col-md-12 col-lg-6 col-xl-6">
            <div class="popular_content">
              <p class="text-capitalize">
                the fast,secure & most popular crypto-currency for your future
                online business. it plans to leverages blockchain technology to
                ensure seamless rental experience.
              </p>
              <a href="" class="text-uppercase"
                >Learn More
                <span class="p-1"
                  ><img
                    src="@/assets/images/icons/arrow.svg"
                    alt="text"
                    class="img-fluid" /></span
              ></a>
            </div>
          </div>
        </div>
        <!-- ____________popular_content_____________ -->
        <div class="row">
          <div class="col-md-12 col-lg-12 col-xl-12">
            <MainheadingComponent
              main_heading="Popular"
              main_heading1="cryptocurrencies"
            />
          </div>
          <div class="col-md-12 col-lg-12 col-xl-12">
            <div class="popular_data_list pt-5">
              <div
                class="
                  tabs_button
                  d-flex
                  align-items-center
                  justify-content-between
                "
              >
                <div class="scrollbar_box">
                  <ul
                    class="nav nav-pills mb-3 justify-content-center"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="pills-Popular-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-Popular"
                        type="button"
                        role="tab"
                        aria-controls="pills-Popular"
                        aria-selected="true"
                      >
                        Popular
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-Bot-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-Bot"
                        type="button"
                        role="tab"
                        aria-controls="pills-Bot"
                        aria-selected="false"
                      >
                        Bot Trading
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-NFT-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-NFT"
                        type="button"
                        role="tab"
                        aria-controls="pills-NFT"
                        aria-selected="false"
                      >
                        NFT
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-Exchange-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-Exchange"
                        type="button"
                        role="tab"
                        aria-controls="pills-Exchange"
                        aria-selected="false"
                      >
                        Exchange
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-Gold-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-Gold"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Gold Trading
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="input-group mb-3 w-25">
                  <span class="input-group-text border-0 p-0" id="basic-addon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      width="16px"
                      style="fill: var(--avx-search)"
                      viewBox="0 0 512 512"
                    >
                      <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                      <path
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
                      />
                    </svg>
                    <!-- <img src="@/assets/images/icons/search.svg" alt="icons" class="img-fluid"> -->
                  </span>
                  <input
                    type="text"
                    class="form-control ps-2 p-0 shadow-none border-0"
                    placeholder="Search icon"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-Popular"
                  role="tabpanel"
                  aria-labelledby="pills-Popular-tab"
                  tabindex="0"
                >
                  <div class="data_list1 py-2 mt-4 table-responsive">
                    <table class="table text-nowrap align-middle">
                      <thead>
                        <tr class="border_bottom">
                          <th scope="col" class="ps-3 text-uppercase">No</th>
                          <th
                            scope="col"
                            colspan="1"
                            class="text-uppercase ps-3"
                          >
                            Name
                          </th>
                          <th scope="col" class="text-uppercase">Last Price</th>
                          <th scope="col" class="text-uppercase text-center">
                            24h change
                          </th>
                          <th scope="col" class="text-uppercase text-center">
                            Market Stats
                          </th>
                          <th scope="col" class="text-uppercase text-center">
                            Trade
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(list, index) in coin_list" :key="index">
                          <td class="ps-3 count_no">{{ index + 1 }}</td>
                          <td>
                            <div class="img_data d-flex align-items-center">
                              <div>
                                <!-- <img :src="require(`@/assets/images/landing-page/popular-currency/${list.image}`)" alt="image" class="img-fluid"> -->
                                <!-- {{ list.currency }}/{{ list.pair_with }} -->
                              </div>
                              <div
                                class="content_data d-flex align-items-center"
                              >
                                <div class="px-2 border_td">
                                  <h6 class="mb-0 text-capitalize">
                                    {{ list.currency }}
                                  </h6>
                                </div>
                                <div class="ps-2">
                                  <p class="mb-0">{{ list.pair_with }}</p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>{{ list.price }}</td>
                          <td
                            :style="
                              list.percentage > 0
                                ? 'color:var(--avxcoin-white)'
                                : 'color:var(--red)'
                            "
                            class="text-center"
                          >
                            {{ list.change }}%
                          </td>
                          <td class="text-center">
                            <!-- <img :src="require(`@/assets/images/landing-page/popular-currency/${data.image1}`)" alt="image" class=" img-fluid"> -->
                            {{ parseFloat(list.volume) }}
                          </td>
                          <td>
                            <div class="button text-center">
                              <button
                                type="button"
                                @click="Submit(list)"
                                class="btn_buy shadow-none"
                              >
                                BUY
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="6">
                            <div class="link_data text-center">
                              <a
                                href=""
                                class="text-decoration-none text-capitalize"
                                >View more markets
                                <span class="p-1"
                                  ><img
                                    src="@/assets/images/icons/arrow1.svg"
                                    alt="text"
                                    class="img-fluid" /></span
                              ></a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- ________popular data list_________ -->
                <div
                  class="tab-pane fade"
                  id="pills-Bot"
                  role="tabpanel"
                  aria-labelledby="pills-Bot-tab"
                  tabindex="0"
                >
                  <div class="data_list1 py-2 mt-4 table-responsive">
                    <table class="table text-nowrap align-middle">
                      <thead>
                        <tr class="border_bottom">
                          <th scope="col" class="ps-3 text-uppercase">No</th>
                          <th
                            scope="col"
                            colspan="1"
                            class="text-uppercase ps-3"
                          >
                            Name
                          </th>
                          <th scope="col" class="text-uppercase">Last Price</th>
                          <th scope="col" class="text-uppercase text-center">
                            24h change
                          </th>
                          <th scope="col" class="text-uppercase text-center">
                            Market Stats
                          </th>
                          <th scope="col" class="text-uppercase text-center">
                            Trade
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(data, index) in GetData2" :key="index">
                          <td class="ps-3 count_no">{{ data.no }}</td>
                          <td>
                            <div class="img_data d-flex align-items-center">
                              <div>
                                <img
                                  :src="
                                    require(`@/assets/images/landing-page/popular-currency/${data.image}`)
                                  "
                                  alt="image"
                                  class="img-fluid"
                                />
                              </div>
                              <div
                                class="content_data d-flex align-items-center"
                              >
                                <div class="px-2 border_td">
                                  <h6 class="mb-0 text-capitalize">
                                    {{ data.coin }}
                                  </h6>
                                </div>
                                <div class="ps-2">
                                  <p class="mb-0">{{ data.pair }}</p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>{{ data.price }}</td>
                          <td
                            :style="
                              data.percentage > 0
                                ? 'color:var(--avxcoin-white)'
                                : 'color:var(--red)'
                            "
                            class="text-center"
                          >
                            {{ data.percentage }}%
                          </td>
                          <td class="text-center">
                            <img
                              :src="
                                require(`@/assets/images/landing-page/popular-currency/${data.image1}`)
                              "
                              alt="image"
                              class="img-fluid"
                            />
                          </td>
                          <td>
                            <div class="button text-center">
                              <button type="button" class="btn_buy shadow-none">
                                BUY
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="6">
                            <div class="link_data text-center">
                              <a
                                href=""
                                class="text-decoration-none text-capitalize"
                                >View more markets
                                <span class="p-1"
                                  ><img
                                    src="@/assets/images/icons/arrow1.svg"
                                    alt="text"
                                    class="img-fluid" /></span
                              ></a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- __________BOT TRADING___________ -->
                <div
                  class="tab-pane fade"
                  id="pills-NFT"
                  role="tabpanel"
                  aria-labelledby="pills-NFT-tab"
                  tabindex="0"
                >
                  <div class="data_list1 py-2 mt-4 table-responsive">
                    <table class="table text-nowrap align-middle">
                      <thead>
                        <tr class="border_bottom">
                          <th scope="col" class="ps-3 text-uppercase">No</th>
                          <th
                            scope="col"
                            colspan="1"
                            class="text-uppercase ps-3"
                          >
                            Name
                          </th>
                          <th scope="col" class="text-uppercase">Last Price</th>
                          <th scope="col" class="text-uppercase text-center">
                            24h change
                          </th>
                          <th scope="col" class="text-uppercase text-center">
                            Market Stats
                          </th>
                          <th scope="col" class="text-uppercase text-center">
                            Trade
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(data, index) in GetData3" :key="index">
                          <td class="ps-3 count_no">{{ data.no }}</td>
                          <td>
                            <div class="img_data d-flex align-items-center">
                              <div>
                                <img
                                  :src="
                                    require(`@/assets/images/landing-page/popular-currency/${data.image}`)
                                  "
                                  alt="image"
                                  class="img-fluid"
                                />
                              </div>
                              <div
                                class="content_data d-flex align-items-center"
                              >
                                <div class="px-2 border_td">
                                  <h6 class="mb-0 text-capitalize">
                                    {{ data.coin }}
                                  </h6>
                                </div>
                                <div class="ps-2">
                                  <p class="mb-0">{{ data.pair }}</p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>{{ data.price }}</td>
                          <td
                            :style="
                              data.percentage > 0
                                ? 'color:var(--avxcoin-white)'
                                : 'color:var(--red)'
                            "
                            class="text-center"
                          >
                            {{ data.percentage }}%
                          </td>
                          <td class="text-center">
                            <img
                              :src="
                                require(`@/assets/images/landing-page/popular-currency/${data.image1}`)
                              "
                              alt="image"
                              class="img-fluid"
                            />
                          </td>
                          <td>
                            <div class="button text-center">
                              <button type="button" class="btn_buy shadow-none">
                                BUY
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="6">
                            <div class="link_data text-center">
                              <a
                                href=""
                                class="text-decoration-none text-capitalize"
                                >View more markets
                                <span class="p-1"
                                  ><img
                                    src="@/assets/images/icons/arrow1.svg"
                                    alt="text"
                                    class="img-fluid" /></span
                              ></a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- __________NFT___________ -->

                <div
                  class="tab-pane fade"
                  id="pills-Exchange"
                  role="tabpanel"
                  aria-labelledby="pills-Exchange-tab"
                  tabindex="0"
                >
                  <div class="data_list1 py-2 mt-4 table-responsive">
                    <table class="table text-nowrap align-middle">
                      <thead>
                        <tr class="border_bottom">
                          <th scope="col" class="ps-3 text-uppercase">No</th>
                          <th
                            scope="col"
                            colspan="1"
                            class="text-uppercase ps-3"
                          >
                            Name
                          </th>
                          <th scope="col" class="text-uppercase">Last Price</th>
                          <th scope="col" class="text-uppercase text-center">
                            24h change
                          </th>
                          <th scope="col" class="text-uppercase text-center">
                            Market Stats
                          </th>
                          <th scope="col" class="text-uppercase text-center">
                            Trade
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(data, index) in GetData4" :key="index">
                          <td class="ps-3 count_no">{{ data.no }}</td>
                          <td>
                            <div class="img_data d-flex align-items-center">
                              <div>
                                <img
                                  :src="
                                    require(`@/assets/images/landing-page/popular-currency/${data.image}`)
                                  "
                                  alt="image"
                                  class="img-fluid"
                                />
                              </div>
                              <div
                                class="content_data d-flex align-items-center"
                              >
                                <div class="px-2 border_td">
                                  <h6 class="mb-0 text-capitalize">
                                    {{ data.coin }}
                                  </h6>
                                </div>
                                <div class="ps-2">
                                  <p class="mb-0">{{ data.pair }}</p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>{{ data.price }}</td>
                          <td
                            :style="
                              data.percentage > 0
                                ? 'color:var(--avxcoin-white)'
                                : 'color:var(--red)'
                            "
                            class="text-center"
                          >
                            {{ data.percentage }}%
                          </td>
                          <td class="text-center">
                            <img
                              :src="
                                require(`@/assets/images/landing-page/popular-currency/${data.image1}`)
                              "
                              alt="image"
                              class="img-fluid"
                            />
                          </td>
                          <td>
                            <div class="button text-center">
                              <button type="button" class="btn_buy shadow-none">
                                BUY
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="6">
                            <div class="link_data text-center">
                              <a
                                href=""
                                class="text-decoration-none text-capitalize"
                                >View more markets
                                <span class="p-1"
                                  ><img
                                    src="@/assets/images/icons/arrow1.svg"
                                    alt="text"
                                    class="img-fluid" /></span
                              ></a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- _______________EXCHANGE____________ -->

                <div
                  class="tab-pane fade"
                  id="pills-Gold"
                  role="tabpanel"
                  aria-labelledby="pills-Gold-tab"
                  tabindex="0"
                >
                  <div class="data_list1 py-2 mt-4 table-responsive">
                    <table class="table text-nowrap align-middle">
                      <thead>
                        <tr class="border_bottom">
                          <th scope="col" class="ps-3 text-uppercase">No</th>
                          <th
                            scope="col"
                            colspan="1"
                            class="text-uppercase ps-3"
                          >
                            Name
                          </th>
                          <th scope="col" class="text-uppercase">Last Price</th>
                          <th scope="col" class="text-uppercase text-center">
                            24h change
                          </th>
                          <th scope="col" class="text-uppercase text-center">
                            Market Stats
                          </th>
                          <th scope="col" class="text-uppercase text-center">
                            Trade
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(data, index) in GetData5" :key="index">
                          <td class="ps-3 count_no">{{ data.no }}</td>
                          <td>
                            <div class="img_data d-flex align-items-center">
                              <div>
                                <img
                                  :src="
                                    require(`@/assets/images/landing-page/popular-currency/${data.image}`)
                                  "
                                  alt="image"
                                  class="img-fluid"
                                />
                              </div>
                              <div
                                class="content_data d-flex align-items-center"
                              >
                                <div class="px-2 border_td">
                                  <h6 class="mb-0 text-capitalize">
                                    {{ data.coin }}
                                  </h6>
                                </div>
                                <div class="ps-2">
                                  <p class="mb-0">{{ data.pair }}</p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>{{ data.price }}</td>
                          <td
                            :style="
                              data.percentage > 0
                                ? 'color:var(--avxcoin-white)'
                                : 'color:var(--red)'
                            "
                            class="text-center"
                          >
                            {{ data.percentage }}%
                          </td>
                          <td class="text-center">
                            <img
                              :src="
                                require(`@/assets/images/landing-page/popular-currency/${data.image1}`)
                              "
                              alt="image"
                              class="img-fluid"
                            />
                          </td>
                          <td>
                            <div class="button text-center">
                              <button type="button" class="btn_buy shadow-none">
                                BUY
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="6">
                            <div class="link_data text-center">
                              <a
                                href=""
                                class="text-decoration-none text-capitalize"
                                >View more markets
                                <span class="p-1"
                                  ><img
                                    src="@/assets/images/icons/arrow1.svg"
                                    alt="text"
                                    class="img-fluid" /></span
                              ></a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- _______________GOLD TRADING_______________ -->
              </div>
            </div>
          </div>
        </div>
        <!-- _________________Popular cryptocurrencies end_________________ -->
      </div>
    </section>
    <!-- _______________popular cryptocurrency section end________________ -->

    <section class="whats_coinavx">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12 col-xl-12">
            <MainheadingComponent
              main_heading="what is"
              main_heading1="coinavx?"
            />
          </div>
          <div class="col-md-12 col-lg-12 col-xl-12">
            <div class="heading_content_info text-center mb-5">
              <h4>
                The revolution in cryptocurrency is being led by pioneers!
              </h4>
              <p>
                We are CoinAVX With our business of cryptocurrency exchange,
                NFT, and gold trading, we have achieved dizzying heights. We
                <br />
                believe that everyone should have the right to spend, earn, and
                trade. The mission of our company is to provide infrastructure
                <br />services for the crypto industry.
              </p>
            </div>
          </div>
        </div>
        <!--_______________ all heading  _________________-->
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4 col-xl-4 px-0">
            <div class="coinavx_content_box p-4">
              <div class="coinavx_img text-center position-relative">
                <img
                  src="@/assets/images/landing-page/what_coinavx/imgcoin1.png"
                  alt=""
                />
              </div>
              <div class="coinavx_info text-center position-relative">
                <h3 class="mb-0">Exchange</h3>
                <p>
                  Crypto exchanges provide a platform for trading, buying, and
                  selling cryptocurrencies. Furthermore, they are used to
                  discover and store the price of cryptocurrencies through
                  trading activity.
                </p>
              </div>
            </div>
          </div>
          <!-- ___________exchange__________ -->
          <div class="col-md-6 col-lg-4 col-xl-4 px-0">
            <div class="coinavx_content_box1 p-4">
              <div class="coinavx_img text-center position-relative">
                <img
                  src="@/assets/images/landing-page/what_coinavx/imgcoin2.png"
                  alt=""
                />
              </div>
              <div class="coinavx_info text-center position-relative">
                <h3 class="mb-0">NFTs</h3>
                <p>
                  Blockchain-based non-fungible tokens (NFTs) are essentially
                  irrevocable digital certificates of ownership and authenticity
                  for a given asset, whether it's digital or physical. NFTs
                  represent a unique asset like an artwork, digital content or
                  media, or a piece of media.
                </p>
              </div>
            </div>
          </div>
          <!-- _____________NFTs___________ -->
          <div class="col-md-6 col-lg-4 col-xl-4 px-0">
            <div class="coinavx_content_box p-4">
              <div class="coinavx_img text-center position-relative">
                <img
                  src="@/assets/images/landing-page/what_coinavx/imgcoin3.png"
                  alt=""
                />
              </div>
              <div class="coinavx_info text-center position-relative">
                <h3 class="mb-0">Gold Trading</h3>
                <p>
                  Gold trading is the buying and selling of gold for profit from
                  price movements. The gold market is highly volatile, so
                  traders attempt to gain returns by buying at low prices and
                  selling at high prices. The precious metal's price is also
                  shorted when the price is expected to fall.
                </p>
              </div>
            </div>
          </div>
          <!-- ______________Gold Trading_______________ -->
        </div>
      </div>
    </section>
    <!-- _____________________What Is CoinAVX_______________________-->

    <section class="nft_section">
      <div class="container">
        <div class="row align-items-center background_nft_img p-4">
          <div class="col-md-12 col-lg-5 col-xl-5">
            <div class="nft_info_box">
              <MainheadingComponent main_heading="NFT" />
              <h3 class="text-capitalize">
                <span>NFT Marketplace:</span> A future investment brimming with
                potential!
              </h3>
              <p class="text-capitalize">
                The most innovative marketplace for buying and selling
                NFTs.Swap. Trade. Invest!
              </p>
            </div>
          </div>
          <!-- _____________nft content_______________ -->

          <div class="col-md-12 col-lg-7 col-xl-7">
            <div class="nft_images text-center">
              <img
                src="@/assets/images/landing-page/nft/nft_img.png"
                alt="text"
                class="img-fluid"
              />
            </div>
          </div>
          <!-- _____________nft image______________ -->
        </div>
      </div>
    </section>
    <!-- ___________________nft section_____________________ -->

    <section class="gold_trading">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-12 col-lg-7 col-xl-7">
            <div class="trading_img">
              <img
                src="@/assets/images/landing-page/gold_trading/gold-image.png"
                alt="text"
                class="img-fluid"
              />
            </div>
          </div>
          <!--______ gold_trading image _______-->
          <div class="col-md-12 col-lg-5 col-xl-5">
            <div class="trading_content">
              <MainheadingComponent
                main_heading="Gold"
                main_heading1="Trading"
              />
              <h3 class="text-capitalize">
                Get rid of the old and replace it with the new!
              </h3>
              <p>
                Get what you want from Gold easily with your wallet money!
                Effortless. Swift. Authentic!
              </p>
            </div>
          </div>
          <!-- ______gold_trading content_______ -->
        </div>
      </div>
    </section>
    <!-- ___________________gold_trading______________________ -->

    <section class="feature_coinavx">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12 col-xl-12">
            <div class="top_headings text-center position-relative">
              <MainheadingComponent
                main_heading="coinAVX"
                main_heading1="Featured"
              />
              <h3 class="text-capitalize">
                A top-of-the-line <span> security system</span>
              </h3>
              <p>
                Investing regularly in security audits ensures our platform is
                highly secure. We've left no stone <br />
                unturned to ensure CoinAVX is the most secure exchange.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-6 col-xl-6">
            <div class="feature_box_coin mb-4 d-flex align-items-center">
              <div class="feature_box_img w-25 text-end">
                <img
                  src="@/assets/images/landing-page/feature/no.1.png"
                  alt="img"
                  class="img-fluid me-4"
                />
              </div>
              <div class="feature_box_content w-75">
                <h3>KYC in under a minute</h3>
                <P
                  >During KYC, top-of-the-line identity verification systems
                  ensure that the right KYC protocol is followed, and we are
                  building robustness to sharply reduce verification times.</P
                >
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 col-xl-6"></div>
          <div class="col-md-12 col-lg-6 col-xl-6"></div>
          <div class="col-md-12 col-lg-6 col-xl-6">
            <div class="feature_box_coin1 mb-4 d-flex align-items-center">
              <div class="feature_box_img w-25 text-end">
                <img
                  src="@/assets/images/landing-page/feature/no.2.png"
                  alt="img"
                  class="img-fluid me-4"
                />
              </div>
              <div class="feature_box_content w-75">
                <h3>KYC in under a minute</h3>
                <P
                  >During KYC, top-of-the-line identity verification systems
                  ensure that the right KYC protocol is followed, and we are
                  building robustness to sharply reduce verification times.</P
                >
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 col-xl-6">
            <div class="feature_box_coin mb-4 d-flex align-items-center">
              <div class="feature_box_img w-25 text-end">
                <img
                  src="@/assets/images/landing-page/feature/no.3.png"
                  alt="img"
                  class="img-fluid me-4"
                />
              </div>
              <div class="feature_box_content w-75">
                <h3>KYC in under a minute</h3>
                <P
                  >During KYC, top-of-the-line identity verification systems
                  ensure that the right KYC protocol is followed, and we are
                  building robustness to sharply reduce verification times.</P
                >
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 col-xl-6"></div>
          <div class="col-md-12 col-lg-6 col-xl-6"></div>
          <div class="col-md-12 col-lg-6 col-xl-6">
            <div class="feature_box_coin1 mb-4 d-flex align-items-center">
              <div class="feature_box_img w-25 text-end">
                <img
                  src="@/assets/images/landing-page/feature/no.4.png"
                  alt="img"
                  class="img-fluid me-4"
                />
              </div>
              <div class="feature_box_content w-75">
                <h3>KYC in under a minute</h3>
                <P
                  >During KYC, top-of-the-line identity verification systems
                  ensure that the right KYC protocol is followed, and we are
                  building robustness to sharply reduce verification times.</P
                >
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 col-xl-6">
            <div class="feature_box_coin mb-4 d-flex align-items-center">
              <div class="feature_box_img w-25 text-end">
                <img
                  src="@/assets/images/landing-page/feature/no.5.png"
                  alt="img"
                  class="img-fluid me-4"
                />
              </div>
              <div class="feature_box_content w-75">
                <h3>KYC in under a minute</h3>
                <P
                  >During KYC, top-of-the-line identity verification systems
                  ensure that the right KYC protocol is followed, and we are
                  building robustness to sharply reduce verification times.</P
                >
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 col-xl-6"></div>
          <div class="col-md-12 col-lg-6 col-xl-6"></div>
          <div class="col-md-12 col-lg-6 col-xl-6">
            <div class="feature_box_coin1 mb-4 d-flex align-items-center">
              <div class="feature_box_img w-25 text-end">
                <img
                  src="@/assets/images/landing-page/feature/no.6.png"
                  alt="img"
                  class="img-fluid me-4"
                />
              </div>
              <div class="feature_box_content w-75">
                <h3>KYC in under a minute</h3>
                <P
                  >During KYC, top-of-the-line identity verification systems
                  ensure that the right KYC protocol is followed, and we are
                  building robustness to sharply reduce verification times.</P
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- __________________feature_coinavx__________________ -->

    <section class="buy_coinavx">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-12 col-lg-5 col-xl-5">
            <div class="buy_coinavx_info">
              <MainheadingComponent
                main_heading="It's everyone's cup of tea"
                main_heading1="with CoinAVX "
              />
              <p>
                It's our goal to build an exchange that will enable anyone who
                believes in cryptos to become a part of the digital
                cryptocurrency revolution. The world is accelerating its
                adoption of cryptocurrency at an unprecedented pace. The time
                has come! CoinAVX allows you to buy, sell, and trade
                cryptocurrencies with ease, confidence, and trust. No matter if
                you are a first-time investor or a professional trader, CoinAVX
                has you covered!
              </p>
            </div>
          </div>
          <!-- _______________buy_coinavx_info________________ -->

          <div class="col-md-12 col-lg-7 col-xl-7">
            <div class="buy_coinavx_img text-center">
              <img
                src="@/assets/images/landing-page/buy_coinavx/cup_img.png"
                alt="image"
                class="img-fluid"
              />
            </div>
          </div>
          <!-- ______________buy_coinavx_img_______________ -->
        </div>
      </div>
    </section>
    <!-- _________________buy_coinavx__________________ -->

    <section class="about_risk">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12 col-xl-12">
            <div class="about_risk_head text-center">
              <MainheadingComponent
                main_heading="A general warning"
                main_heading1="about risks"
              />
              <p>
                It is imperative to note that every CoinAVX Service comes with
                its own set of risks. This notice gives a general
                <br />description of the risks you may encounter when using
                CoinAVX Services.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-12 col-xl-12">
            <div class="about_slider">
              <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active mt-5">
                    <div class="row align-items-center justify-content-center">
                      <div class="col-md-6 col-lg-4 col-xl-4">
                        <div class="slider_box p-3 mb-3">
                          <div class="slider_img mb-3">
                            <img
                              src="@/assets/images/landing-page/about/img1.png"
                              alt="text"
                              class="img-fluid"
                            />
                          </div>
                          <div class="slider_content position-relative">
                            <h3>
                              We do not offer personal <br />
                              advice
                            </h3>
                            <p>
                              Concerning our products and services, we do not
                              provide personal advice. We sometimes provide
                              factual information, transaction procedures, and
                              potential risks. The choice to use or not use our
                              products and services is yours.
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- ___________slider box__________ -->
                      <div class="col-md-6 col-lg-4 col-xl-4">
                        <div class="slider_box p-3 mb-3">
                          <div class="slider_img mb-3">
                            <img
                              src="@/assets/images/landing-page/about/img2.png"
                              alt="text"
                              class="img-fluid"
                            />
                          </div>
                          <div class="slider_content position-relative">
                            <h3>
                              Monitoring is not <br />
                              conducted
                            </h3>
                            <p>
                              CoinAVX does not act as an agent, broker,
                              intermediary, or advisor to you, nor does it have
                              any fiduciary obligations to them. We do not
                              monitor your use of CoinAVX Services to ensure
                              that they meet your financial objectives.
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- _____________slider box_______________ -->
                      <div class="col-md-6 col-lg-4 col-xl-4">
                        <div class="slider_box p-3 mb-3">
                          <div class="slider_img mb-3">
                            <img
                              src="@/assets/images/landing-page/about/img3.png"
                              alt="text"
                              class="img-fluid"
                            />
                          </div>
                          <div class="slider_content position-relative">
                            <h3>
                              Risques in the <br />
                              market
                            </h3>
                            <p>
                              It is imperative to keep in mind that digital
                              asset trading involves market volatility and high
                              market risks. Changes in value frequently occur
                              without prior notice, and past performance is not
                              indicative of future results.
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- _____________slider box_______________ -->
                    </div>
                  </div>
                  <div class="carousel-item mt-5">
                    <div class="row align-items-center justify-content-center">
                      <div class="col-md-6 col-lg-4 col-xl-4">
                        <div class="slider_box p-3 mb-3">
                          <div class="slider_img mb-3">
                            <img
                              src="@/assets/images/landing-page/about/img1.png"
                              alt="text"
                              class="img-fluid"
                            />
                          </div>
                          <div class="slider_content position-relative">
                            <h3>
                              We do not offer personal <br />
                              advice
                            </h3>
                            <p>
                              Concerning our products and services, we do not
                              provide personal advice. We sometimes provide
                              factual information, transaction procedures, and
                              potential risks. The choice to use or not use our
                              products and services is yours.
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- ___________slider box__________ -->
                      <div class="col-md-6 col-lg-4 col-xl-4">
                        <div class="slider_box p-3 mb-3">
                          <div class="slider_img mb-3">
                            <img
                              src="@/assets/images/landing-page/about/img2.png"
                              alt="text"
                              class="img-fluid"
                            />
                          </div>
                          <div class="slider_content position-relative">
                            <h3>
                              Monitoring is not <br />
                              conducted
                            </h3>
                            <p>
                              CoinAVX does not act as an agent, broker,
                              intermediary, or advisor to you, nor does it have
                              any fiduciary obligations to them. We do not
                              monitor your use of CoinAVX Services to ensure
                              that they meet your financial objectives.
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- _____________slider box_______________ -->
                      <div class="col-md-6 col-lg-4 col-xl-4">
                        <div class="slider_box p-3 mb-3">
                          <div class="slider_img mb-3">
                            <img
                              src="@/assets/images/landing-page/about/img3.png"
                              alt="text"
                              class="img-fluid"
                            />
                          </div>
                          <div class="slider_content position-relative">
                            <h3>
                              Risques in the <br />
                              market
                            </h3>
                            <p>
                              It is imperative to keep in mind that digital
                              asset trading involves market volatility and high
                              market risks. Changes in value frequently occur
                              without prior notice, and past performance is not
                              indicative of future results.
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- _____________slider box_______________ -->
                    </div>
                  </div>
                  <div class="carousel-item mt-5">
                    <div class="row align-items-center justify-content-center">
                      <div class="col-md-6 col-lg-4 col-xl-4">
                        <div class="slider_box p-3 mb-3">
                          <div class="slider_img mb-3">
                            <img
                              src="@/assets/images/landing-page/about/img1.png"
                              alt="text"
                              class="img-fluid"
                            />
                          </div>
                          <div class="slider_content position-relative">
                            <h3>
                              We do not offer personal <br />
                              advice
                            </h3>
                            <p>
                              Concerning our products and services, we do not
                              provide personal advice. We sometimes provide
                              factual information, transaction procedures, and
                              potential risks. The choice to use or not use our
                              products and services is yours.
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- ___________slider box__________ -->
                      <div class="col-md-6 col-lg-4 col-xl-4">
                        <div class="slider_box p-3 mb-3">
                          <div class="slider_img mb-3">
                            <img
                              src="@/assets/images/landing-page/about/img2.png"
                              alt="text"
                              class="img-fluid"
                            />
                          </div>
                          <div class="slider_content position-relative">
                            <h3>
                              Monitoring is not <br />
                              conducted
                            </h3>
                            <p>
                              CoinAVX does not act as an agent, broker,
                              intermediary, or advisor to you, nor does it have
                              any fiduciary obligations to them. We do not
                              monitor your use of CoinAVX Services to ensure
                              that they meet your financial objectives.
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- _____________slider box_______________ -->
                      <div class="col-md-6 col-lg-4 col-xl-4">
                        <div class="slider_box p-3 mb-3">
                          <div class="slider_img mb-3">
                            <img
                              src="@/assets/images/landing-page/about/img3.png"
                              alt="text"
                              class="img-fluid"
                            />
                          </div>
                          <div class="slider_content position-relative">
                            <h3>
                              Risques in the <br />
                              market
                            </h3>
                            <p>
                              It is imperative to keep in mind that digital
                              asset trading involves market volatility and high
                              market risks. Changes in value frequently occur
                              without prior notice, and past performance is not
                              indicative of future results.
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- _____________slider box_______________ -->
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ____________________about_risk_____________________ -->

    <section class="faq_section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12 col-xl-12">
            <div class="main_heading1">
              <h6>FAQs</h6>
              <MainheadingComponent
                main_heading="Frequently"
                main_heading1="Answered Questions"
              />
            </div>
          </div>
        </div>
        <div
          class="
            row
            position-relative
            align-items-center
            mt-5
            reverse
            justify-content-between
          "
        >
          <div class="col-md-2 col-lg-2 col-xl-2">
            <div class="d-flex nav_tabs_content align-items-start">
              <div
                class="nav flex-column nav-pills p-2"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  class="nav-link mb-3 active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <div class="tab_img">
                    <img
                      src="@/assets/images/landing-page/faq/img1.png"
                      alt="text"
                      class="img-fluid mb-2"
                    />
                    <h3 class="text-capitalize">Exchange</h3>
                  </div>
                </button>
                <button
                  class="nav-link mb-3"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  <div class="tab_img">
                    <img
                      src="@/assets/images/landing-page/faq/img2.png"
                      alt="text"
                      class="img-fluid mb-2"
                    />
                    <h3 class="text-capitalize">bot trading</h3>
                  </div>
                </button>
                <button
                  class="nav-link mb-3"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  <div class="tab_img">
                    <img
                      src="@/assets/images/landing-page/faq/img3.png"
                      alt="text"
                      class="img-fluid mb-2"
                    />
                    <h3 class="text-capitalize">NFT</h3>
                  </div>
                </button>
                <button
                  class="nav-link mb-3"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  <div class="tab_img">
                    <img
                      src="@/assets/images/landing-page/faq/img4.png"
                      alt="text"
                      class="img-fluid mb-2"
                    />
                    <h3 class="text-capitalize">Gold Trading</h3>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-9 col-lg-10 col-xl-10">
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              Cryptocurrency cashouts: how do you do it?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        <p>
                          Bitcoin can be cashed out through a third-party
                          broker, over-the-counter trading, or on a third-party
                          <br />trading platform. It can also be traded
                          peer-to-peer. With limited restrictions, it is
                          possible to withdraw <br />a large amount of bitcoin
                          per day.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              Are Bitcoin cash-outs taxed?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        Bitcoin can be cashed out through a third-party broker,
                        over-the-counter trading, or on a third-party
                        <br />trading platform. It can also be traded
                        peer-to-peer. With limited restrictions, it is possible
                        to withdraw <br />a large amount of bitcoin per day.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              After a year, what is the tax rate on crypto?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        Bitcoin can be cashed out through a third-party broker,
                        over-the-counter trading, or on a third-party
                        <br />trading platform. It can also be traded
                        peer-to-peer. With limited restrictions, it is possible
                        to withdraw <br />a large amount of bitcoin per day.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingFour">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              After a year, what is the tax rate on crypto?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        Bitcoin can be cashed out through a third-party broker,
                        over-the-counter trading, or on a third-party
                        <br />trading platform. It can also be traded
                        peer-to-peer. With limited restrictions, it is possible
                        to withdraw <br />a large amount of bitcoin per day.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingFive">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              After a year, what is the tax rate on crypto?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        Bitcoin can be cashed out through a third-party broker,
                        over-the-counter trading, or on a third-party
                        <br />trading platform. It can also be traded
                        peer-to-peer. With limited restrictions, it is possible
                        to withdraw <br />a large amount of bitcoin per day.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingOne1">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne1"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              Cryptocurrency cashouts: how do you do it?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne1"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        <p>
                          Bitcoin can be cashed out through a third-party
                          broker, over-the-counter trading, or on a third-party
                          <br />trading platform. It can also be traded
                          peer-to-peer. With limited restrictions, it is
                          possible to withdraw <br />a large amount of bitcoin
                          per day.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingTwo2">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo2"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              Are Bitcoin cash-outs taxed?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo2"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        Bitcoin can be cashed out through a third-party broker,
                        over-the-counter trading, or on a third-party
                        <br />trading platform. It can also be traded
                        peer-to-peer. With limited restrictions, it is possible
                        to withdraw <br />a large amount of bitcoin per day.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingThree3">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree3"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              After a year, what is the tax rate on crypto?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree3"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        Bitcoin can be cashed out through a third-party broker,
                        over-the-counter trading, or on a third-party
                        <br />trading platform. It can also be traded
                        peer-to-peer. With limited restrictions, it is possible
                        to withdraw <br />a large amount of bitcoin per day.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingFour4">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour4"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              After a year, what is the tax rate on crypto?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour4"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        Bitcoin can be cashed out through a third-party broker,
                        over-the-counter trading, or on a third-party
                        <br />trading platform. It can also be traded
                        peer-to-peer. With limited restrictions, it is possible
                        to withdraw <br />a large amount of bitcoin per day.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingFive5">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive5"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              After a year, what is the tax rate on crypto?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive5"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        Bitcoin can be cashed out through a third-party broker,
                        over-the-counter trading, or on a third-party
                        <br />trading platform. It can also be traded
                        peer-to-peer. With limited restrictions, it is possible
                        to withdraw <br />a large amount of bitcoin per day.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingOne11">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne11"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              Cryptocurrency cashouts: how do you do it?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne11"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        <p>
                          Bitcoin can be cashed out through a third-party
                          broker, over-the-counter trading, or on a third-party
                          <br />trading platform. It can also be traded
                          peer-to-peer. With limited restrictions, it is
                          possible to withdraw <br />a large amount of bitcoin
                          per day.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingTwo22">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo22"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              Are Bitcoin cash-outs taxed?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo22"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        Bitcoin can be cashed out through a third-party broker,
                        over-the-counter trading, or on a third-party
                        <br />trading platform. It can also be traded
                        peer-to-peer. With limited restrictions, it is possible
                        to withdraw <br />a large amount of bitcoin per day.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingThree33">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree33"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              After a year, what is the tax rate on crypto?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree33"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        Bitcoin can be cashed out through a third-party broker,
                        over-the-counter trading, or on a third-party
                        <br />trading platform. It can also be traded
                        peer-to-peer. With limited restrictions, it is possible
                        to withdraw <br />a large amount of bitcoin per day.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingFour44">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour44"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              After a year, what is the tax rate on crypto?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour44"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        Bitcoin can be cashed out through a third-party broker,
                        over-the-counter trading, or on a third-party
                        <br />trading platform. It can also be traded
                        peer-to-peer. With limited restrictions, it is possible
                        to withdraw <br />a large amount of bitcoin per day.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingFive55">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive55"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              After a year, what is the tax rate on crypto?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive55"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        Bitcoin can be cashed out through a third-party broker,
                        over-the-counter trading, or on a third-party
                        <br />trading platform. It can also be traded
                        peer-to-peer. With limited restrictions, it is possible
                        to withdraw <br />a large amount of bitcoin per day.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingOne21">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne21"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              Cryptocurrency cashouts: how do you do it?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne21"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        <p>
                          Bitcoin can be cashed out through a third-party
                          broker, over-the-counter trading, or on a third-party
                          <br />trading platform. It can also be traded
                          peer-to-peer. With limited restrictions, it is
                          possible to withdraw <br />a large amount of bitcoin
                          per day.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingTwo221">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo221"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              Are Bitcoin cash-outs taxed?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo221"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        Bitcoin can be cashed out through a third-party broker,
                        over-the-counter trading, or on a third-party
                        <br />trading platform. It can also be traded
                        peer-to-peer. With limited restrictions, it is possible
                        to withdraw <br />a large amount of bitcoin per day.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingThree23">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree23"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              After a year, what is the tax rate on crypto?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree23"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        Bitcoin can be cashed out through a third-party broker,
                        over-the-counter trading, or on a third-party
                        <br />trading platform. It can also be traded
                        peer-to-peer. With limited restrictions, it is possible
                        to withdraw <br />a large amount of bitcoin per day.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingFour24">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour24"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              After a year, what is the tax rate on crypto?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour24"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        Bitcoin can be cashed out through a third-party broker,
                        over-the-counter trading, or on a third-party
                        <br />trading platform. It can also be traded
                        peer-to-peer. With limited restrictions, it is possible
                        to withdraw <br />a large amount of bitcoin per day.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item mb-2">
                    <h2 class="accordion-header" id="flush-headingFive25">
                      <button
                        class="accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive25"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        <div class="d-flex align-items-center">
                          <div>
                            <img
                              src="@/assets/images/landing-page/faq/question.png"
                              alt="text"
                              class="img-fluid me-2"
                            />
                          </div>
                          <div>
                            <h3 class="mb-0 text-capitalize">
                              After a year, what is the tax rate on crypto?
                            </h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive25"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body pt-0 ps-5">
                        Bitcoin can be cashed out through a third-party broker,
                        over-the-counter trading, or on a third-party
                        <br />trading platform. It can also be traded
                        peer-to-peer. With limited restrictions, it is possible
                        to withdraw <br />a large amount of bitcoin per day.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- _____________________faq section___________________ -->
  </div>
</template>

<script>
import MainheadingComponent from "@/components/MainheadingComponent.vue";
import BannerComponent from "@/components/BannerComponent.vue";
import ApiClass from "@/Api/Api";
export default {
  name: "HomeView",
  components: {
    BannerComponent,
    MainheadingComponent,
  },
  data() {
    return {
      coin_list: "",
      loading: true,
      tickers: "",
      //   why_justbit: exchange_data.why_justbit,
      //   faqs: exchange_data.faqs,
      banners: [],
    };
  },
  mounted() {
    this.ChartGet();
    this.banner();
  },

  methods: {
    async banner() {
      let resp = await ApiClass.getRequest("banner/get", false);
      if (resp?.data) {
        if (resp.data.status_code == 1) {
          this.banners = resp.data.data;
        }
      }
    },
    Submit(slug) {
      this.$router.push({
        path: "/exchange",
        query: { s: slug.currency + slug.pair_with },
      });
    },

    async ChartGet() {
      let response = await ApiClass.getNodeRequest("list-crypto/get", false);

      if (response.data.status_code == 1) {
        this.loading = false;
        this.coin_list = response.data.data.USDT.slice(0, 8);

        this.tickers = response.data.tickers.slice(0, 8);
      }
      const ticker_subs = this.tickers.map((v) => v.toLowerCase() + "@ticker");
      let $this = this;
      const ws = new WebSocket("wss://stream.binance.com:9443/ws");
      const data = {
        method: "SUBSCRIBE",
        params: ticker_subs,
        id: 1,
      };
      ws.onopen = function () {
        // Web Socket is connected, send data using send()
        ws.send(JSON.stringify(data));
      };
      ws.onmessage = function (evt) {
        var received_msg = JSON.parse(evt.data);
        // console.log(received_msg.s);
        $this.coin_list?.filter((CoinList) => {
          if (CoinList.symbol == received_msg.s) {
            CoinList.change = received_msg.P;
            CoinList.price = received_msg.c;
          }
        });
      };
      ws.onclose = function () {
        // console.log("Home Connection is closed...");
      };
      ws.onerror = function (evt) {
        console.log(evt);
      };
    },
  },
};
</script>

<style scoped>
section {
  padding: 70px 0;
}
.home {
  overflow-x: hidden;
}
.crypto_popular {
  background-color: var(--avxcoin-black);
  position: relative;
}

.crypto_popular:before {
  position: absolute;
  bottom: 241px;
  left: 0;
  content: "";
  background-image: url("@/assets/images/landing-page/popular-currency/left_img.png");
  background-repeat: no-repeat;
  height: 300px;
  width: 250px;
}

.crypto_popular:after {
  position: absolute;
  top: 58px;
  right: -1px;
  content: "";
  background-image: url(http://192.168.11.65:8080/img/right_img.62d734be.png);
  background-repeat: no-repeat;
  height: 300px;
  width: 123px;
}

.popular_heading,
.popular_content,
.before_background {
  position: relative;
}

.popular_heading::before {
  position: absolute;
  top: -45px;
  left: -46px;
  content: "";
  height: 220px;
  width: 20px;
  background-repeat: no-repeat;
  background-image: url("@/assets/images/landing-page/popular-currency/before1.png");
}

.popular_content::after {
  position: absolute;
  top: -55px;
  right: -51px;
  content: "";
  height: 220px;
  width: 20px;
  background-repeat: no-repeat;
  background-image: url("@/assets/images/landing-page/popular-currency/before2.png");
}

.before_background:before {
  position: absolute;
  top: -45px;
  left: -9px;
  content: "";
  height: 229px;
  width: 1344px;
  background-repeat: no-repeat;
  background-image: url("@/assets/images/landing-page/popular-currency/popular_before.png");
}

.popular_heading h2 {
  font-size: 47px;
  line-height: 68px;
  font-family: "Oxanium";
  font-weight: 700;
  color: var(--landing-white);
}

.popular_heading h2 span {
  color: var(--avx-yellow);
}

.popular_content p {
  font-size: 19px;
  font-family: "Oxanium";
  color: var(--avx-para);
  font-weight: 400;
}

.popular_content a {
  color: var(--avx-yellow);
  font-size: 15px;
  font-family: "Oxanium";
  font-weight: 400;
  text-decoration: unset;
}

.popular_content span {
  background-color: rgba(255, 255, 255, 0.11);
}

.scrollbar_box .nav-pills .nav-link.active,
.scrollbar_box .nav-pills .show > .nav-link {
  background-color: var(--avx-yellow);
  color: var(--landing-black);
  font-size: 16px;
  line-height: 26px;
  font-family: "Oxanium";
  font-weight: 500;
  border-radius: 5px !important;
}

.nav-pills .nav-link {
  font-size: 16px;
  line-height: 26px;
  font-family: "Oxanium";
  font-weight: 500;
  background-color: var(--avx-tab-bg);
  color: var(--avx-text);
  margin-right: 10px;
  min-width: 150px;
  border-radius: 5px !important;
}

.input-group {
  background-color: var(--avx-tab-bg);
  border-radius: 5px;
  padding: 8px 16px;
}

.input-group-text {
  background-color: unset;
}

.input-group .form-control {
  background-color: unset;
  color: var(--avx-text);
  font-size: 15px;
  font-family: "Oxanium";
  font-weight: 500;
}

::placeholder {
  color: var(--avx-text);
}

/* table style */
.data_list1 {
  background-color: var(--avx-tabs-color);
  border-radius: 5px;
  border: 1px solid var(--avx-border);
}

table thead th {
  color: var(--avx-text);
  font-size: 15px;
  font-family: "Oxanium";
  font-weight: 500;
  border-style: unset;
  padding: 12px 0px;
}

table tbody td {
  color: var(--avxcoin-white);
  font-size: 15px;
  font-family: "Oxanium";
  font-weight: 500;
}

.table > :not(caption) > * > * {
  border-bottom-width: 0;
}

td.count_no {
  color: var(--avx-text);
  font-size: 15px;
  font-family: "Oxanium";
  font-weight: 500;
}

.content_data h6 {
  font-size: 14px;
  font-family: "Oxanium";
  font-weight: 500;
  color: var(--avxcoin-white);
}

.content_data p {
  font-size: 14px;
  font-family: "Oxanium";
  font-weight: 400;
  color: var(--avx-text);
}

.border_td {
  border-right: 2px solid var(--avx-border);
}

.btn_buy {
  padding: 6px 40px;
  border: 1px solid var(--axv-lbutton);
  border-radius: 5px;
  color: var(--axv-lbutton);
  font-size: 17px;
  font-family: "Oxanium";
  font-weight: 500;
  background: unset;
}

tr.border_bottom {
  border-bottom: 1px solid var(--avx-border);
}

.link_data a {
  color: var(--avx-text);
  font-size: 17px;
  font-weight: 600;
  font-family: "Oxanium";
}

.link_data span {
  background-color: rgba(255, 255, 255, 0.11);
}

/*_______________ what is coinavx css start _______________________*/
.whats_coinavx {
  background-color: var(--avxcoin-black);
}

.heading_content_info h4 {
  font-size: 23px;
  font-family: "Oxanium";
  font-weight: 500;
  color: var(--avxcoin-white);
}

.heading_content_info p {
  color: var(--avx-text);
  font-family: "Oxanium";
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
}

.coinavx_content_box,
.coinavx_content_box1 {
  background-image: url("@/assets/images/landing-page/what_coinavx/coinavx_img.png");
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 380px;
  position: relative;
}

.coinavx_content_box1 {
  position: relative;
  top: 86px;
}

.coinavx_content_box h3,
.coinavx_content_box1 h3 {
  font-size: 27px;
  font-family: "Oxanium";
  font-weight: 500;
  color: var(--landing-white);
}

.coinavx_content_box p,
.coinavx_content_box1 p {
  color: var(--avx-text);
  font-family: "Oxanium";
  font-weight: 500;
  font-size: 15px;
  line-height: 28px;
}

.coinavx_img:before {
  position: absolute;
  top: -23px;
  left: 0;
  right: 0;
  content: "";
  margin: 0 auto;
  background-image: url("@/assets/images/landing-page/what_coinavx/top_line.png");
  background-repeat: no-repeat;
  height: 10px;
  width: 209px;
}

.coinavx_img:after {
  position: absolute;
  top: -21px;
  left: 0;
  right: -46px;
  content: "";
  margin: 0 auto;
  background-image: url("@/assets/images/landing-page/what_coinavx/top_line1.png");
  background-repeat: no-repeat;
  height: 15px;
  width: 209px;
}

.coinavx_content_box:before,
.coinavx_content_box1:before {
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  content: "";
  margin: 0 auto;
  background-image: url("@/assets/images/landing-page/what_coinavx/bottom_line.png");
  background-repeat: no-repeat;
  height: 32px;
  width: 209px;
}

/* ___________nft______________ */
.nft_section {
  background-image: url("@/assets/images/landing-page/nft/background_img.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: var(--landing-black);
  min-height: 600px;
  position: relative;
}

.nft_section:before {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  background-image: url("@/assets/images/landing-page/nft/linear_effect1.png");
  background-repeat: no-repeat;
  height: 600px;
  width: 400px;
}

.nft_section:after {
  position: absolute;
  top: -135px;
  right: 0;
  content: "";
  background-image: url("@/assets/images/landing-page/nft/linear_effect2.png");
  background-repeat: no-repeat;
  height: 600px;
  width: 400px;
}

.nft_info_box h3 {
  font-size: 30px;
  font-family: "Oxanium";
  font-weight: 500;
  color: var(--landing-white);
}

.nft_info_box h3 span {
  color: var(--avx-yellow);
}

.nft_info_box p {
  font-size: 19px;
  font-family: "Oxanium";
  font-weight: 500;
  color: var(--avx-text);
}

.background_nft_img {
  position: relative;
}

.background_nft_img:before {
  position: absolute;
  top: 162px;
  left: 0;
  right: 0;
  margin: 0 auto;
  content: "";
  background-image: url("@/assets/images/landing-page/nft/background_before.png");
  background-repeat: no-repeat;
  width: 1399px;
  height: 589px;
}

/* ____________nft section css  done_________________*/
/* _____________________trading_content__________________ */
.gold_trading {
  background-color: var(--avxcoin-black);
}

.trading_content h3 {
  font-size: 17px;
  font-family: "Oxanium";
  font-weight: 500;
  color: var(--avxcoin-white);
}

.trading_content p {
  font-size: 17px;
  font-family: "Oxanium";
  font-weight: 500;
  color: var(--avx-text);
}

/*_________________ features_______________ */
.feature_coinavx {
  background-color: var(--avxcoin-black);
  position: relative;
}

.feature_coinavx .top_headings:before {
  position: absolute;
  top: 199px;
  left: -355px;
  right: 0;
  content: "";
  margin: 0 auto;
  background-image: url("@/assets/images/landing-page/feature/step_line.png");
  background-repeat: no-repeat;
  height: 1674px;
  width: 878px;
}
.feature_box_coin1 {
  position: relative;
  left: -99px;
  min-height: 229px;
}
.feature_box_coin {
  position: relative;
  right: -112px;
  min-height: 273px;
}
.top_headings h3 {
  font-size: 30px;
  font-family: "Oxanium";
  font-weight: 500;
  color: var(--avxcoin-white);
}

.top_headings h3 span {
  color: var(--avx-yellow);
}

.top_headings p {
  font-size: 16px;
  font-family: "Oxanium";
  font-weight: 500;
  color: var(--avx-text);
}

.feature_box_content h3 {
  font-size: 21px;
  font-family: "Oxanium";
  font-weight: 500;
  color: var(--avxcoin-white);
}

.feature_box_content p {
  font-size: 17px;
  font-family: "Oxanium";
  font-weight: 500;
  color: var(--avx-text);
}

.feature_box_img img {
  height: 130px;
}

.feature_coinavx:before {
  position: absolute;
  bottom: 241px;
  left: 0;
  content: "";
  background-image: url("@/assets/images/landing-page/popular-currency/left_img.png");
  background-repeat: no-repeat;
  height: 300px;
  width: 250px;
}

.feature_coinavx:after {
  position: absolute;
  top: 58px;
  right: -1px;
  content: "";
  background-image: url(http://192.168.11.65:8080/img/right_img.62d734be.png);
  background-repeat: no-repeat;
  height: 300px;
  width: 123px;
}

/* _______________buy coinavx__________________ */
.buy_coinavx {
  background-image: url("@/assets/images/landing-page/buy_coinavx/background_img.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--landing-black);
  min-height: 600px;
}

.buy_coinavx_info p,
.about_risk_head p {
  font-size: 16px;
  font-family: "Oxanium";
  font-weight: 500;
  color: var(--avx-text);
}

/* about risk start */
.about_risk {
  background-color: var(--avxcoin-black);
}

.slider_box {
  background: var(--avx-liner);
  position: relative;
  min-height: 285px;
}

/* .slider_box:before {
    position: absolute;
    bottom: 0;
    right: 0;
    content: '';
    background-image: url('@/assets/images/landing-page/about/line-paraller.png');
    background-repeat: no-repeat;
    height: 244px;
    width: 425px;
} */

.slider_content h3 {
  font-size: 21px;
  font-family: "Oxanium";
  font-weight: 500;
  color: var(--avxcoin-white);
}

.slider_content p {
  font-size: 15px;
  font-family: "Oxanium";
  font-weight: 500;
  color: var(--avx-text);
  text-align: justify;
  word-break: break-all;
}

.about_risk .carousel-indicators {
  /* bottom:-62px; */
  display: none;
}

.carousel-control-prev-icon {
  background-image: url("@/assets/images/landing-page/banner/prev.png");
}

.carousel-control-next-icon {
  background-image: url("@/assets/images/landing-page/banner/next.png");
}

.carousel-dark .carousel-control-next-icon,
.carousel-dark .carousel-control-prev-icon {
  filter: unset;
}

.carousel-control-next,
.carousel-control-prev {
  top: 0;
  bottom: unset;
  width: 97%;
  justify-content: end;
}

/* ___________faq css__________ */
.faq_section {
  background-image: url("@/assets/images/landing-page/faq/bg_img1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}

.faq_section:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 90%);
}

.main_heading1 h6 {
  font-size: 17px;
  font-family: "Oxanium";
  font-weight: 500;
  color: var(--avxcoin-white);
  position: relative;
}

.tab_img h3 {
  font-size: 17px;
  font-family: "Oxanium";
  font-weight: 400;
  color: var(--landing-white);
}
.faq_section .nav-pills .nav-link {
  background-color: var(--avx-tab-bg1);
}
.faq_section .nav-pills {
  background-color: var(--avx-tab-bg1);
}
.faq_section .nav_tabs_content .nav-pills .nav-link.active {
  background-image: url("@/assets/images/landing-page/faq/tab_bg.png");
  background-repeat: no-repeat;
  background-color: transparent;
}
.accordion-flush .accordion-item .accordion-button,
.accordion-flush .accordion-item .accordion-button.collapsed {
  background-color: unset;
  border-radius: 4px !important;
}

.accordion-item {
  background: rgb(147 140 140 / 14%);
  backdrop-filter: blur(4px);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.accordion-item h3 {
  font-size: 17px;
  font-family: "Oxanium";
  font-weight: 500;
  color: var(--landing-white);
}
.accordion-body {
  font-size: 15px;
  font-family: "Oxanium";
  font-weight: 500;
  color: var(--avx-text);
}
.accordion-button::after {
  background-image: url("@/assets/images/icons/arrow-down.svg");
}
.accordion-button:not(.collapsed)::after {
  background-image: url("@/assets/images/icons/arrow-down.svg");
}
.accordion-flush .accordion-item {
  border-radius: 5px;
}
/* _______________meadia query start__________________ */
@media (min-width: 1200px) and (max-width: 1399px) {
  .before_background:before {
    width: 1155px;
  }
  .coinavx_content_box1 {
    position: unset;
  }
  .coinavx_content_box,
  .coinavx_content_box1 {
    background-image: unset;
  }
  .coinavx_img:after,
  .coinavx_img:before,
  .coinavx_content_box:before,
  .coinavx_content_box1:before,
  .background_nft_img:before,
  .feature_coinavx:after,
  .feature_coinavx:before {
    display: none;
  }
  .slider_box:before {
    width: 366px;
  }
  .feature_coinavx .top_headings:before {
    top: 201px;
    left: -185px;
    right: -5px;
  }
  .feature_box_coin1 {
    left: 15px;
  }
  .popular_content p {
    font-size: 18px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .popular_content::after,
    .popular_heading::before,
    .background_nft_img:before,
    .feature_coinavx .top_headings:before,
    .coinavx_img:after,
    .coinavx_img:before,
    .coinavx_content_box:before, .coinavx_content_box1:before,
    .feature_coinavx:after,
    .feature_coinavx:before,
    /* .before_background:before, */
    .crypto_popular:after,
    .crypto_popular:before {
    display: none;
  }
  .before_background:before {
    width: 980px;
  }
  .popular_heading h2 {
    font-size: 36px;
    line-height: 42px;
  }
  .nav-pills .nav-link {
    min-width: 110px;
  }
  .coinavx_content_box1 {
    position: unset;
  }
  .coinavx_content_box,
  .coinavx_content_box1 {
    background-image: unset;
  }
  .feature_box_coin1 {
    left: 0;
    min-height: 186px;
  }
  .feature_box_coin {
    right: 0;
    min-height: 165px;
    margin-top: 20px;
  }
  .carousel-control-next,
  .carousel-control-prev {
    width: 96%;
  }
  .slider_box:before {
    width: 315px;
  }
  .slider_box {
    min-height: 345px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  section {
    padding: 40px 0;
  }
  .popular_content::after,
    .popular_heading::before,
    .background_nft_img:before,
    .feature_coinavx .top_headings:before,
    .coinavx_img:after,
    .coinavx_img:before,
    .coinavx_content_box:before, .coinavx_content_box1:before,
    .feature_coinavx:after,
    .feature_coinavx:before,
    /* .before_background:before, */
    .crypto_popular:after,
    .crypto_popular:before {
    display: none;
  }
  .before_background:before {
    width: 736px;
    top: -11px;
    left: -7px;
  }
  .tabs_button {
    flex-direction: column-reverse;
    align-items: start !important;
  }
  .nav-pills .nav-link {
    min-width: 128px;
  }
  .input-group {
    width: 50% !important;
  }
  .coinavx_content_box1 {
    position: unset;
  }
  .coinavx_content_box,
  .coinavx_content_box1 {
    background-image: unset;
  }
  .popular_content::after,
  .popular_heading::before,
  .background_nft_img:before,
  .feature_coinavx .top_headings:before,
  .coinavx_img:after,
  .coinavx_img:before,
  .coinavx_content_box:before,
  .coinavx_content_box1:before,
  .feature_coinavx:after,
  .feature_coinavx:before {
    display: none;
  }
  .feature_box_coin {
    right: 0;
  }
  .feature_box_coin1 {
    left: 0;
  }
  .popular_heading h2 {
    font-size: 28px;
    line-height: 32px;
  }
  .carousel-control-next,
  .carousel-control-prev {
    width: 95%;
  }
  .slider_box:before {
    width: 336px;
  }
  .slider_content h3 {
    font-size: 18px;
  }
}
@media all and (min-width: 320px) and (max-width: 767px) {
  /* .before_background:before, */
  .crypto_popular:after,
  .crypto_popular:before {
    display: none;
  }
  .before_background:before {
    width: 320px;
    top: -8px;
    left: 0;
  }
  .popular_content::after,
  .popular_heading::before,
  .background_nft_img:before,
  .feature_coinavx .top_headings:before,
  .coinavx_img:after,
  .coinavx_img:before,
  .coinavx_content_box:before,
  .coinavx_content_box1:before,
  .feature_coinavx:after,
  .feature_coinavx:before {
    display: none;
  }
  .popular_heading h2 {
    font-size: 22px;
    line-height: 27px;
  }
  .before_background {
    padding: 0 !important;
  }
  .popular_content p {
    font-size: 15px;
    word-break: break-all;
  }
  .tabs_button {
    flex-direction: column-reverse;
  }
  .input-group {
    width: 100% !important;
  }
  .nav-pills .nav-link {
    margin-bottom: 15px !important;
    min-width: 138px;
  }
  section {
    padding: 40px 0;
  }
  .coinavx_content_box,
  .coinavx_content_box1 {
    background-image: unset;
    position: unset;
    min-height: 302px;
    padding: 0px 10px;
  }
  .background_nft_img {
    padding: 0px !important;
    flex-direction: column-reverse;
  }
  .nft_info_box h3 {
    font-size: 22px;
  }
  .trading_img {
    margin-bottom: 10px;
  }
  .top_headings h3 {
    font-size: 21px;
  }
  .feature_box_coin {
    right: 0;
  }
  .feature_box_content p {
    font-size: 14px;
  }
  .feature_box_content {
    padding: 0px 10px 0px;
  }
  .feature_box_content h3 {
    font-size: 19px;
  }
  .feature_box_coin1 {
    left: 0;
  }
  .buy_coinavx_info p,
  .about_risk_head p {
    text-align: justify;
    word-break: break-all;
  }
  .carousel-control-next,
  .carousel-control-prev {
    width: 88%;
  }
  .faq_section .nav {
    margin-bottom: 20px;
  }
  .accordion-item h3 {
    font-size: 15px;
  }
  .nft_section:before {
    width: 300px;
  }
}
</style>
