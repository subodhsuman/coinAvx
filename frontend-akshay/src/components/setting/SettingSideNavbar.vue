<template>
<div class="p-2 py-4">
    <!-- ______profile setting -->
    <ul class="list-unstyled sidenav-list text-white">
        <li class="mb-4">
            <div class="accordion rounded" id="accordionExample">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button :class="profile.find(v=>v.link===$route.path) || active ? 'custom_active ':''" class="accordion-button shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div class="icon_box me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26.449" height="26.449" viewBox="0 0 26.449 26.449">
                                    <path id="noun-user-5114678" d="M153.227,96.453a13.225,13.225,0,1,0-9.351-3.873A13.224,13.224,0,0,0,153.227,96.453Zm0-24.245a11.021,11.021,0,1,1-7.792,3.228A11.019,11.019,0,0,1,153.227,72.208Zm-5.51,18.735a1.1,1.1,0,0,0,1.1-1.1,4.408,4.408,0,0,1,8.816,0,1.1,1.1,0,1,0,2.2,0,6.612,6.612,0,0,0-4.3-6.183,4.408,4.408,0,1,0-4.64,0,6.613,6.613,0,0,0-4.287,6.183,1.1,1.1,0,0,0,1.1,1.1Zm5.51-13.225a2.2,2.2,0,1,1-1.559.645A2.205,2.205,0,0,1,153.227,77.718Z" transform="translate(-140.002 -70.004)" />
                                </svg>
                            </div>
                            <span class="text-uppercase"> Profile settings</span>
                        </button>
                    </h2>

                    <div id="collapseOne" @click="click()" :class="profile.find(v=>v.link===$route.path) ? 'accordion-collapse show' :'collapse'" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body py-1 ms-5 ">
                            <div class="inner_list_box">
                                <ul class="list-unstyled">

                                    <router-link to="/profile">
                                        <li>My Profile</li>
                                    </router-link>
                                    <router-link to="/kyc">
                                        <li>KYC Verificatione </li>
                                    </router-link>

                                    <router-link to="/bank-detail">
                                        <li>Bank Details </li>
                                    </router-link>

                                    <router-link to="/2f-authentication">
                                        <li>2 Factor Authentication </li>
                                    </router-link>

                                    <router-link to="/activity-log">
                                        <li> Activity Logs </li>
                                    </router-link>

                                    <router-link to="/referral">
                                        <li>My Referrals</li>
                                    </router-link>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </li>
        <li class="mb-4">
            <div class="accordion rounded" id="accordionExample2">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed shadow-none" :class="funds.find(v=>v.link===$route.path) || active ?'custom_active':''" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <div class="icon_box me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24.762" height="24.678" viewBox="0 0 24.762 24.678">
                                    <g id="noun-funds-5108003" transform="translate(-71.916 -11.532)">
                                        <path id="Path_1926" data-name="Path 1926" d="M104.372,326.276a1.883,1.883,0,0,0-1.521-.113l-5.284,1.9a1.569,1.569,0,0,0,.105-.374,1.86,1.86,0,0,0-1.833-2.168H93a2.989,2.989,0,0,1-1.872-.675,5.943,5.943,0,0,0-7.058-.4v-.737a.774.774,0,0,0-.772-.772H81.383a.774.774,0,0,0-.772.772v8.2a.774.774,0,0,0,.772.772H83.3a.774.774,0,0,0,.772-.772v-.441a12.217,12.217,0,0,1,4.551.975,12.223,12.223,0,0,0,4.469.854,11.885,11.885,0,0,0,2.488-.265,29.167,29.167,0,0,0,8.9-3.49,1.887,1.887,0,0,0-.11-3.268Zm-20.887,5.631a.187.187,0,0,1-.187.187H81.383a.187.187,0,0,1-.187-.187v-8.2a.187.187,0,0,1,.187-.187H83.3a.187.187,0,0,1,.187.187v8.2Zm21.269-3.677a1.288,1.288,0,0,1-.577.811,28.685,28.685,0,0,1-8.72,3.416,11.461,11.461,0,0,1-6.622-.562,13.048,13.048,0,0,0-4.633-1.022H84.07v-5.76a5.447,5.447,0,0,1,6.692.179,3.558,3.558,0,0,0,2.238.8h2.839a1.273,1.273,0,0,1,1.256,1.49,1.234,1.234,0,0,1-.6.854.245.245,0,0,0-.055.031,1.445,1.445,0,0,1-.686.172h-5.16a.292.292,0,1,0,0,.585h5.163a2.045,2.045,0,0,0,.983-.254l6.31-2.262a1.3,1.3,0,0,1,1.7,1.517Z" transform="translate(-8.695 -297.09)" />
                                        <path id="Path_1927" data-name="Path 1927" d="M401.958,177.4a3.256,3.256,0,1,0-3.256-3.256A3.262,3.262,0,0,0,401.958,177.4Zm0-5.928a2.671,2.671,0,1,1-2.671,2.671A2.673,2.673,0,0,1,401.958,171.469Z" transform="translate(-312.166 -152.028)" />
                                        <path id="Path_1928" data-name="Path 1928" d="M448.907,197.424a.409.409,0,0,1-.41-.41.292.292,0,1,0-.585,0,.99.99,0,0,0,.7.944v.25a.292.292,0,1,0,.585,0v-.25a.991.991,0,0,0-.292-1.938.41.41,0,1,1,.41-.41.292.292,0,1,0,.585,0,.99.99,0,0,0-.7-.944v-.25a.292.292,0,1,0-.585,0v.25a.991.991,0,0,0,.292,1.938.41.41,0,1,1,0,.819Z" transform="translate(-359.115 -174.201)" />
                                        <path id="Path_1929" data-name="Path 1929" d="M334.217,23.633c0,3.876,3.549,4.325,6.22,4.325s6.22-.448,6.22-4.325A9.779,9.779,0,0,0,343.28,16.6h-.035a1.233,1.233,0,0,0-.761-2.18l1.2-2.469a.293.293,0,0,0-.265-.421h-5.963a.293.293,0,0,0-.265.421l1.2,2.469a1.232,1.232,0,0,0-.768,2.172,9.748,9.748,0,0,0-3.4,7.039Zm8.732-11.516-1.115,2.3h-2.8l-1.115-2.3Zm-4.524,2.89h4.024a.655.655,0,1,1,0,1.31h-4.024a.655.655,0,1,1,0-1.31Zm-.222,1.872a1.342,1.342,0,0,0,.218.023h4.024a1.01,1.01,0,0,0,.218-.023,9.03,9.03,0,0,1,3.4,6.758c0,2.585-1.739,3.74-5.635,3.74s-5.635-1.154-5.635-3.74a9.042,9.042,0,0,1,3.4-6.758Z" transform="translate(-250.645 0)" />
                                        <path id="Path_1930" data-name="Path 1930" d="M199.65,210.721a1.067,1.067,0,1,0,1.065-1.065A1.069,1.069,0,0,0,199.65,210.721Zm1.548,0a.482.482,0,1,1-.484-.48A.478.478,0,0,1,201.2,210.721Z" transform="translate(-122.262 -189.018)" />
                                        <path id="Path_1931" data-name="Path 1931" d="M165.249,157.317h6.817a.292.292,0,1,0,0-.585h-6.524v-6.474h8.034a.292.292,0,0,0,0-.585h-8.326a.3.3,0,0,0-.292.292v7.058a.3.3,0,0,0,.292.293Z" transform="translate(-89.164 -131.792)" />
                                        <path id="Path_1932" data-name="Path 1932" d="M268.728,186.995a1.508,1.508,0,0,1,.7.175.293.293,0,1,0,.265-.523,2.1,2.1,0,0,0-.967-.238,2.133,2.133,0,1,0,0,4.266.7.7,0,0,0,.113-.012.293.293,0,0,0-.031-.585.773.773,0,0,0-.078.008,1.546,1.546,0,1,1,0-3.093Z" transform="translate(-186.126 -166.84)" />
                                    </g>
                                </svg>

                            </div>
                            <span class="text-uppercase">Funds</span>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" @click="click1()" :class="funds.find(v=>v.link==$route.path) ? 'accordion-collapse show':'collapse'" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body py-1 ms-5 ">
                            <div class="inner_list_box ">
                                <ul class="list-unstyled">
                                    <router-link to="/portfolio">
                                        <li>Portfolio</li>
                                    </router-link>
                                    <router-link to="/deposit-history">
                                        <li>Deposit History</li>
                                    </router-link>
                                    <router-link to="/withdraw-history">
                                        <li>Withdraw History</li>
                                    </router-link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="mb-4">
            <div class="accordion rounded" id="accordionExample3">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed shadow-none" :class="orderhistory.find(v=>v.link===$route.path) || active ? 'custom_active':''" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <div class="icon_box me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23.22" height="26.898" viewBox="0 0 23.22 26.898">
                                    <g id="noun-order-history-3157802" transform="translate(-75.074 -24.069)">
                                        <path id="Path_1933" data-name="Path 1933" d="M433.01,304.663a.92.92,0,0,1-.92-.92v-.4a.92.92,0,1,1,1.839,0v.4A.919.919,0,0,1,433.01,304.663Z" transform="translate(-341.093 -263.73)" />
                                        <path id="Path_1934" data-name="Path 1934" d="M216.735,340.269H209.13a.92.92,0,1,1,0-1.839h7.605a.92.92,0,0,1,0,1.839Z" transform="translate(-128.977 -297.842)" />
                                        <path id="Path_1935" data-name="Path 1935" d="M216.735,422.139H209.13a.92.92,0,1,1,0-1.839h7.605a.92.92,0,0,1,0,1.839Z" transform="translate(-128.977 -375.41)" />
                                        <path id="Path_1936" data-name="Path 1936" d="M133.222,37.263a.92.92,0,0,0,.92.92h7.605a.919.919,0,0,0,.826-.517,7.056,7.056,0,1,0-3.58-9.861h-8.206a1.726,1.726,0,0,0-1.724,1.724V49.243a1.726,1.726,0,0,0,1.724,1.724H145.1a1.726,1.726,0,0,0,1.724-1.724V42.752a.92.92,0,0,0-1.839,0v6.376H130.9V29.644h7.416a7.085,7.085,0,0,0-.1,2.4h-4.078a.92.92,0,0,0,0,1.839h4.58a7.088,7.088,0,0,0,1.752,2.463h-6.333a.92.92,0,0,0-.92.92ZM140,31.125a5.222,5.222,0,1,1,5.222,5.217A5.225,5.225,0,0,1,140,31.125Z" transform="translate(-53.989)" />
                                        <path id="Path_1937" data-name="Path 1937" d="M421.968,75.235a.916.916,0,0,1-.413-.1l-1.987-1a.92.92,0,0,1-.506-.821v-3.8a.92.92,0,0,1,1.839,0v3.23l1.481.745a.925.925,0,0,1-.414,1.741h0Z" transform="translate(-328.749 -42.19)" />
                                    </g>
                                </svg>
                            </div>
                            <span class="text-uppercase">Order History</span>
                        </button>
                    </h2>
                    <div id="collapseThree" @click="click2()" :class="orderhistory.find(v=>v.link===$route.path) ? 'accordion-collapse show':'collapse'" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample3">
                        <div class="accordion-body py-1 ms-5 ">
                            <div class="inner_list_box ">
                                <ul class="list-unstyled">
                                    <router-link to="/spot-history">
                                        <li>Spot Trading History</li>
                                    </router-link>
                                    <router-link to="/margin-history">
                                        <li>Margin Trading History</li>
                                    </router-link>
                                    <router-link to="/future-history">
                                        <li>Future Trading History</li>
                                    </router-link>
                                    <router-link to="/p2p-history">
                                        <li>P2P History</li>
                                    </router-link>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>

        <li class="support_box mb-4 rounded text-uppercase d-flex align-items-center justify-content-between">

            <!-- <span > support</span> -->
            <router-link to="/support" class="d-flex align-items-center gap-2">
                <div class="icon_box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30.845" height="31.759" viewBox="0 0 30.845 31.759">
                        <g id="Group_31243" data-name="Group 31243" transform="translate(-72.72 -28)">
                            <path id="Path_1938" data-name="Path 1938" d="M373.542,132.025a1.417,1.417,0,0,0-1.046-.415,2.524,2.524,0,0,0-2.435,2.6l.075,2.316-.391,1.583a1.829,1.829,0,0,0-1.309.536l-2.575,2.577-.892.154a2.867,2.867,0,0,0-1.536.794l-1.774,1.774a2.842,2.842,0,0,0-.837,1.953l-.066,2.94a2.1,2.1,0,0,0-1.44,1.968l-.041,3.849a2.1,2.1,0,0,0,2.075,2.12l6.387.069h.023a2.1,2.1,0,0,0,2.1-2.075l.041-3.849a2.1,2.1,0,0,0-1.375-1.989l.013-.089a3.04,3.04,0,0,1,.863-1.713l3-3a4.737,4.737,0,0,0,1.361-2.847l.318-3.016a1.938,1.938,0,0,0,.036-.34v-.008s0-.009,0-.014c0-.02,0-.038,0-.059l-.155-4.863a1.416,1.416,0,0,0-.416-.955Zm-4.7,18.879-.041,3.849a1.03,1.03,0,0,1-.313.73,1.107,1.107,0,0,1-.737.3l-6.387-.068a1.043,1.043,0,0,1-1.027-1.049l.041-3.849a1.04,1.04,0,0,1,1.038-1.028h.011l6.387.068a1.043,1.043,0,0,1,1.027,1.05Zm2.807-7.526-3,3a4.094,4.094,0,0,0-1.161,2.308l-.016.109-5.654-.061.063-2.813a1.79,1.79,0,0,1,.527-1.229l1.774-1.774a1.8,1.8,0,0,1,.966-.5l1.059-.183a.509.509,0,0,0,.107-.031l.007,0a.528.528,0,0,0,.168-.111l0,0,2.694-2.7a.777.777,0,1,1,1.1,1.1l-3.1,3.1a.53.53,0,0,0,.75.749l3.1-3.1a1.829,1.829,0,0,0-.274-2.82l.423-1.712c0-.006,0-.012,0-.017a.5.5,0,0,0,.008-.054c0-.018,0-.036,0-.055s0-.012,0-.018l-.078-2.388a1.463,1.463,0,0,1,1.406-1.506.366.366,0,0,1,.268.106.356.356,0,0,1,.106.241l.154,4.825-.036.339c0,.013,0,.025,0,.038l-.311,2.952a3.679,3.679,0,0,1-1.056,2.209Z" transform="translate(-270.549 -97.079)" />
                            <path id="Path_1939" data-name="Path 1939" d="M478.392,432.031a.906.906,0,1,1-.906-.906.906.906,0,0,1,.906.906" transform="translate(-380.463 -377.723)" />
                            <path id="Path_1940" data-name="Path 1940" d="M105.4,132.971l-.155,4.867c0,.021,0,.041,0,.061v.009a1.921,1.921,0,0,0,.037.347l.318,3.015a4.735,4.735,0,0,0,1.361,2.847l3,3a3.04,3.04,0,0,1,.862,1.711l.013.091a2.1,2.1,0,0,0-1.375,1.989l.041,3.849a2.1,2.1,0,0,0,2.1,2.075h.023l6.387-.068a2.1,2.1,0,0,0,2.075-2.12l-.041-3.849a2.1,2.1,0,0,0-1.44-1.968l-.066-2.94a2.844,2.844,0,0,0-.837-1.953l-1.774-1.774a2.87,2.87,0,0,0-1.534-.793l-.893-.155-2.576-2.577a1.831,1.831,0,0,0-1.309-.536l-.391-1.583.076-2.317a2.526,2.526,0,0,0-2.441-2.6,1.421,1.421,0,0,0-1.456,1.372ZM118.982,150.8l.041,3.849A1.043,1.043,0,0,1,118,155.7l-6.386.069a1.091,1.091,0,0,1-.736-.3,1.03,1.03,0,0,1-.313-.73l-.042-3.849a1.043,1.043,0,0,1,1.027-1.05l6.387-.068h.011a1.04,1.04,0,0,1,1.039,1.027Zm-12.418-18.039a.378.378,0,0,1,.263-.106,1.464,1.464,0,0,1,1.412,1.5l-.078,2.389c0,.006,0,.012,0,.018s0,.036,0,.055a.439.439,0,0,0,.008.054c0,.006,0,.012,0,.018l.423,1.712a1.829,1.829,0,0,0-.274,2.82l3.1,3.1a.53.53,0,0,0,.749-.749l-3.1-3.1a.777.777,0,1,1,1.1-1.1l2.694,2.7,0,0a.524.524,0,0,0,.168.112l.007,0a.546.546,0,0,0,.107.031l1.06.183a1.8,1.8,0,0,1,.964.5l1.774,1.774a1.788,1.788,0,0,1,.527,1.229l.063,2.813-5.654.061-.016-.111a4.09,4.09,0,0,0-1.161-2.306l-3-3a3.677,3.677,0,0,1-1.056-2.209l-.311-2.952c0-.013,0-.025,0-.038l-.036-.339.154-4.824a.357.357,0,0,1,.106-.243Z" transform="translate(-32.525 -97.07)" />
                            <path id="Path_1941" data-name="Path 1941" d="M196.482,432.031a.906.906,0,1,1-.906-.906.906.906,0,0,1,.906.906" transform="translate(-116.316 -377.723)" />
                            <path id="Path_1942" data-name="Path 1942" d="M292.708,105.256a3.853,3.853,0,1,0-3.853-3.853A3.857,3.857,0,0,0,292.708,105.256Zm0-6.647a2.794,2.794,0,1,1-2.795,2.794A2.8,2.8,0,0,1,292.708,98.609Z" transform="translate(-204.566 -65.167)" />
                            <path id="Path_1943" data-name="Path 1943" d="M234.517,44.472h1.672a1.19,1.19,0,0,0,1.188-1.188V42.167a6.257,6.257,0,0,0,2.1-1.212l.967.558a1.181,1.181,0,0,0,.592.16,1.209,1.209,0,0,0,.309-.041,1.18,1.18,0,0,0,.721-.554l.836-1.448a1.191,1.191,0,0,0-.435-1.624l-.968-.559a6.319,6.319,0,0,0,0-2.424l.967-.559a1.19,1.19,0,0,0,.435-1.624l-.836-1.448a1.189,1.189,0,0,0-1.623-.435l-.967.558a6.25,6.25,0,0,0-2.1-1.212V29.188A1.189,1.189,0,0,0,236.19,28h-1.673a1.19,1.19,0,0,0-1.188,1.188v1.117a6.255,6.255,0,0,0-2.1,1.212l-.967-.559a1.19,1.19,0,0,0-1.623.435l-.837,1.449a1.19,1.19,0,0,0,.435,1.623l.967.559a6.3,6.3,0,0,0,0,2.424l-.968.559a1.189,1.189,0,0,0-.435,1.623l.836,1.448a1.187,1.187,0,0,0,1.623.435l.967-.559a6.255,6.255,0,0,0,2.1,1.212v1.117a1.19,1.19,0,0,0,1.189,1.189ZM229.733,40.6a.13.13,0,0,1-.177-.048L228.72,39.1a.13.13,0,0,1,.047-.177l1.191-.687a1.706,1.706,0,0,0,.166-.111l0,0c.01-.008.018-.017.028-.025a.526.526,0,0,0,.174-.32s0-.006,0-.008a.526.526,0,0,0,0-.094c0-.007,0-.014,0-.021a.555.555,0,0,0-.013-.082.016.016,0,0,0,0,0,5.235,5.235,0,0,1,0-2.66.536.536,0,0,0,.014-.19.529.529,0,0,0-.22-.377,1.639,1.639,0,0,0-.154-.1l-1.191-.687a.13.13,0,0,1-.048-.177l.836-1.448a.131.131,0,0,1,.177-.048l1.191.688a1.682,1.682,0,0,0,.174.086.359.359,0,0,0,.036.012.518.518,0,0,0,.164.032l.011,0,.011,0a.528.528,0,0,0,.182-.035l.01,0a.529.529,0,0,0,.171-.113,5.18,5.18,0,0,1,2.3-1.331c.013,0,.024-.01.037-.014l.029-.011a.52.52,0,0,0,.139-.084l.017-.016a.53.53,0,0,0,.1-.131c0-.006,0-.011.008-.017a.529.529,0,0,0,.054-.172v0a1.669,1.669,0,0,0,.013-.2V29.188a.131.131,0,0,1,.13-.129h1.672a.13.13,0,0,1,.13.129v1.375a1.743,1.743,0,0,0,.012.2v0a.491.491,0,0,0,.015.065c0,.013,0,.026.009.038s.012.027.018.04a.517.517,0,0,0,.025.054l.006.009a.546.546,0,0,0,.053.074l0,0a.544.544,0,0,0,.07.067l.013.008a.565.565,0,0,0,.074.047l.016.006a.5.5,0,0,0,.083.032h0a5.186,5.186,0,0,1,2.3,1.331h0a.532.532,0,0,0,.17.112l.011,0a.526.526,0,0,0,.181.035l.011,0,.011,0a.534.534,0,0,0,.164-.032l.036-.012a1.684,1.684,0,0,0,.174-.086l1.191-.687a.13.13,0,0,1,.177.047l.836,1.448a.13.13,0,0,1-.048.177l-1.189.687a1.636,1.636,0,0,0-.149.1.531.531,0,0,0-.207.595,5.235,5.235,0,0,1-.006,2.638.017.017,0,0,1,0,0,.491.491,0,0,0-.013.082c0,.007,0,.014,0,.021a.524.524,0,0,0,0,.094s0,.006,0,.008a.525.525,0,0,0,.174.32c.01.008.018.018.028.025l0,0a1.769,1.769,0,0,0,.166.111l1.191.687a.13.13,0,0,1,.048.177l-.837,1.449a.127.127,0,0,1-.079.06.125.125,0,0,1-.1-.013l-1.19-.687a1.615,1.615,0,0,0-.181-.09h0l-.006,0a.529.529,0,0,0-.569.115h0a5.2,5.2,0,0,1-2.3,1.33l0,0c-.015,0-.028.011-.042.016a.528.528,0,0,0-.317.324c0,.006,0,.013,0,.019a.511.511,0,0,0-.019.084v0a1.669,1.669,0,0,0-.013.2v1.375a.13.13,0,0,1-.13.13h-1.672a.13.13,0,0,1-.13-.13V41.908a1.739,1.739,0,0,0-.012-.2.034.034,0,0,1,0-.006.5.5,0,0,0-.013-.058c0-.015-.006-.031-.011-.045s-.01-.023-.015-.034a.5.5,0,0,0-.027-.06l0-.007a.577.577,0,0,0-.054-.076l-.008-.008a.554.554,0,0,0-.065-.062l-.019-.012a.558.558,0,0,0-.068-.043l-.02-.008a.516.516,0,0,0-.078-.03h0a5.2,5.2,0,0,1-2.3-1.33h0a.531.531,0,0,0-.568-.115l-.007,0-.005,0a1.694,1.694,0,0,0-.178.089Z" transform="translate(-147.211)" />
                        </g>
                    </svg>
                </div>
                support
            </router-link>
            <span><img src="../../assets/images/icons/aacord-arrow.svg" alt="icon" style="height:18px"></span>

        </li>
    </ul>

</div>
</template>

<script>
export default {
    name: 'SettingSideNavbar',
    data() {
        return {

            show: "",
            show1: "",
            show2: "",
            active: false,
            active1: false,
            active2: false,
            profile: [{
                    name: 'profilesetting',
                    link: '/profile'
                },
                {
                    name: 'KycVerification',
                    link: '/kyc'
                },
                {
                    name: 'BankDetail',
                    link: '/bank-detail'
                },
                {
                    name: 'TwoFactorView',
                    link: '/2f-authentication'
                },
                {
                    name: 'ActivityView',
                    link: '/activity-log'
                },
                {
                    name: 'ReferralView',
                    link: '/referral'
                }

            ],
            funds: [{
                    name: 'PortfolioView',
                    link: '/portfolio'
                },

                {
                    name: 'DepositHistory',
                    link: '/deposit-history'
                },
                {
                    name: 'withdrawhistory',
                    link: '/withdraw-history'
                },
            ],
            orderhistory: [{

                    name: 'SpotTrading',
                    link: '/spot-history'
                },
                {
                    name: 'MarginHistory',
                    link: '/margin-history'
                },

                {
                    name: 'FuturesHistory',
                    link: '/future-history'
                },
                {
                    name: 'P2pHistory',
                    link: '/p2p-history'
                },

            ],
            // trade: [{
            //     name: 'TradingReportView',
            //     link: '/trading-report'
            // }, ],
            // ref: [{
            //     link: '/referrallink',
            //     name: 'ReferralView',
            // }],
            support: [{
                link: '/support',
                name: 'SupportView',

            }]

        }
    },
    unmounted() {

        this.unselect();
    },
    methods: {
        tr() {

            document.getElementById('accordionExample').siblings().removeClass('active');
            document.toggleClass('active');

        },
        unselect() {
            this.active = false;
        },
    }
}
</script>

<style scoped>
.support_box {
    border: 1px solid var(--avx-yellow);
    padding: 16px 20px;
    color: var(--avx-white);
    font-weight: 500;
    font-size: 16px;
}
a.router-link-active.router-link-exact-active {
    color: var(--avx-yellow);
}
a.router-link-active.router-link-exact-active svg{
   fill: var(--avx-yellow);
}
a.router-link-active.router-link-exact-active li {
    color: var(--avx-yellow) !important;
}

.icon_box svg {
    fill: var(--avx-white);
}

button.custom_active.accordion-button span {
    color: var(--avx-yellow);
}

button.custom_active.accordion-button .icon_box svg {
    fill: var(--avx-yellow);
}

.accordion-button span {
    color: var(--avx-white);
    font-weight: 500;
    font-size: 16px;
}

.accordion-button {
    background-color: transparent;
    font-size: 18px;
}

.accordion {
    --bs-accordion-bg: transparent;
    border: 1px solid var(--avx-yellow);
    --bs-accordion-border-color: transparent;
}

.accordion-button::after {
    background-image: url(../../assets/images/icons/aacord-arrow.svg);
}

.accordion-button:not(.collapsed)::after {
    background-image: url(../../assets/images/icons/accord-arrow-down.svg);
    transform: rotate(90deg);
}

.inner_list_box ul li {
    color: var(--avx-white);
    margin-bottom: 10px;
    font-size: 15px;
}

.inner_list_box ul a li,
li a {
    color: var(--avx-white);
    text-decoration: none !important;
}

.inner_list_box a {
    text-decoration: none;
}

/* .inner_list_box ul li */
</style>
