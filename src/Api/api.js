import axios from "axios";

export default class ApiClass {
  //   static rateURl = import.meta.env.VITE_RATE_URL;
  //   static CAPTCHA_SITE_KEY = import.meta.env.VITE_CAPTCHA_SITE_KEY;
  //   static VUE_DOMAIN = import.meta.env.VITE_VUE_DOMAIN;


  // static CAPTCHA_SITE_KEY = "6LeA8aMeAAAAAIZ430h3mJAoaOWKWOZJiIp_5Mag";
  // static nodeUrl = "http://192.168.11.136:3000/";
  // static nodeWebsocket ="ws://192.168.11.136:3000/";
  // static baseUrl = "http://192.168.11.136/coinavx/api/";
  // static VUE_DOMAIN = "http://192.168.10.20:8080";


  //ranjit sir.
  static CAPTCHA_SITE_KEY = "6LeA8aMeAAAAAIZ430h3mJAoaOWKWOZJiIp_5Mag";
  static nodeUrl = "git push -u origin main/";
  static nodeWebsocket ="ws://192.168.11.60:3000/";
  static baseUrl = "http://192.168.11.60:8000/api/";
  static VUE_DOMAIN = "http://192.168.10.20:8080";








// Live links
  // static CAPTCHA_SITE_KEY = "6LeA8aMeAAAAAIZ430h3mJAoaOWKWOZJiIp_5Mag";
  // static nodeUrl = "https://node.paisaxc.com/";
  // static nodeWebsocket = "ws://192.46.209.91:4201/";
  // static baseUrl = "http://demo.paisaxc.com/backend/public/api/";
  // static VUE_DOMAIN = "http://demo.paisaxc.com/";

  //   static nodeWebsocket = import.meta.env.VITE_NODE_WEB_SOCKET;
  //   static baseUrl = import.meta.env.VITE_BASE_URL;


  static got404Error() {
    return {
      status_code: 0,
      message: "404 NOT FOUND",
    };
  }

  //*************************************************************************** */
  static getRate(apiURL, headers = null, params = null) {
    return axios
      .get(this.rateURl, this.config(headers, params))
      .then((result) => {
        return result;
      })
      .catch((err) => {
        if (err.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }

  //******************************* Post api *******************************************//
  static postRequest(
    apiUrl,
    isToken = true,
    formData = null,
    headers = null,
    params = null
  ) {
    return axios
      .post(
        this.baseUrl + apiUrl,
        formData,
        this.config(isToken, headers, params)
      )
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }
  //******************************* Get api *******************************************//

  static getRequest(apiUrl, isToken = true, headers = null, params = null) {
    return axios
      .get(this.baseUrl + apiUrl, this.config(isToken, headers, params))
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }

  //******************************** Update api ********************************************** */

  //******************* if form data with image ************************ */

  static updateFormRequest(
    apiUrl,
    isToken = true,
    formData = null,
    headers = null,
    params = null
  ) {
    baseParam = { _method: "PUT" };
    if (params != null) {
      // var baseParam = $.extend(params, baseParam)
      var baseParam = Object.assign(params, baseParam);
    }
    return axios
      .post(
        this.baseUrl + apiUrl,
        formData,
        this.config(isToken, headers, baseParam)
      )
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }
  //******************* form data in json format ************************ */

  static updateRequest(
    apiUrl,
    isToken = true,
    formData = null,
    headers = null,
    params = null
  ) {
    return axios
      .put(
        this.baseUrl + apiUrl,
        formData,
        this.config(isToken, headers, params)
      )
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }

  //*********************************** Delete api *************************************************** */

  static deleteRequest(apiUrl, isToken = true, headers = null, params = null) {
    return axios
      .delete(this.baseUrl + apiUrl, this.config(isToken, headers, params))
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }

  //******************************* Configrations of header and parameters ******************************* */

  static config(isToken = true, headers = null, parameters = null) {
    var defaultHeaders = {
      Accept: "application/json",
    };
    var merge = {};
    if (isToken) {
      var token = { Authorization: "Bearer " + localStorage.getItem("token") };
      merge = Object.assign(defaultHeaders, token);
    }

    merge = Object.assign(defaultHeaders, headers);
    return {
      headers: merge,
      params: parameters,
    };
  }

  //******************************* Post api *******************************************//
  // static postRequest(
  //   apiUrl,
  //   isToken = true,
  //   formData = null,
  //   headers = null,
  //   params = null
  // ) {
  //   console.log({ formData });
  //   return axios
  //     .post(
  //       this.baseUrl + apiUrl,
  //       formData,
  //       this.config(isToken, headers, params)
  //     )
  //     .then((result) => {
  //       return result;
  //     })
  //     .catch((error) => {
  //       if (error.response.status == 401) {
  //         this.unauthenticateRedirect();
  //       }
  //     });
  // }
  //******************************* Get api *******************************************//

  static unauthenticateRedirect() {
    localStorage.clear();
    // location.replace("/signin");
  }

  // node Api

  static getNodeRequest(apiUrl, isToken = true, headers = null, params = null) {
    // console.log(this.token,"token");
    return axios
      .get(this.nodeUrl + apiUrl, this.config(isToken, headers, params))
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log("ERROR => ", error);
        // if (error.response.status == 401) {
        //   this.unauthenticateRedirect();
        // }
      });
  }

  // POst
  static postNodeRequest(
    apiUrl,
    isToken = true,
    formData = null,
    headers = null,
    params = null

  ) {
    // console.log(formData);
    return axios
      .post(
        this.nodeUrl + apiUrl,
        formData,
        this.config(isToken, headers, params)
      )
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });

  }

  //Put
  static putNodeRequest(apiUrl, isToken = true, formData = null, headers = null, params = null) {
    // console.log(this.token,"token");
    return axios
      .put(this.nodeUrl + apiUrl, formData, this.config(isToken, headers, params))
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log("ERROR => ", error);
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }

  //Delete
  static deleteNodeRequest(apiUrl, isToken = true, formData = null, headers = null, params = null) {
    // console.log(this.token,"token");
    return axios
      .delete(this.nodeUrl + apiUrl, formData, this.config(isToken, headers, params))
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log("ERROR => ", error);
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }
  static checkPass(
    apiUrl,
    isToken = true,
    formData = null,
    headers = null,
    params = null
  ) {
    return axios
      .post(
        apiUrl,
        formData,
        this.config(isToken, headers, params)
      )
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }
}


