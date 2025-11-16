export const PHOT_URL =  "https://scontent-del2-1.xx.fbcdn.net/v/t1.6435-1/197100804_1610819182444941_5593279179614464248_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=OxpTkPm2A4YQ7kNvwH9vO5R&_nc_oc=Adn84T9jObsbOWUVEvrx-8HGPHCvcXjyeDuedDKwyd2XkHxJE0GmrbwBTG0ZpRogD6U&_nc_zt=24&_nc_ht=scontent-del2-1.xx&_nc_gid=QpvzsCMFXbc3WU8aBIDIDg&oh=00_AfiZZt39XENOPkw_wn0y2i621NTiW0GCOL-zTYvv8kT3vA&oe=693EC881";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_large.jpg";
export const SUPPORTED_LANGUAGES = [{
  identifier: 'en',
  name: 'English'
}, {
  identifier: 'hindi',
  name: 'Hindi'
}, {
  identifier: 'spanish',
  name: 'Spanish'
}]
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;