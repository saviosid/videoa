import axios from 'axios';
const KEY ="AIzaSyATjMnSyhC1YozT_f5vLmJVRVNPntNzF9Y" ;


export default axios.create( {

      baseURL : "https://www.googleapis.com/youtube/v3",
      params : {
            part : "snippet" ,
            maxResults : 5 ,
            key : KEY

      }

});