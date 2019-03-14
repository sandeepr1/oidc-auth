
import React, {
    Component
} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'

class Authorize extends Component {
    constructor(props) {
        super(props);

        this.authorize = this.authorize.bind(this);
        this.parse_query_string=this.parse_query_string.bind(this);
    }


    parse_query_string(query) {
        var vars = query.split("&");
        var query_string = {};
        for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split("=");
          var key = decodeURIComponent(pair[0]);
          var value = decodeURIComponent(pair[1]);
          // If first entry with this name
          if (typeof query_string[key] === "undefined") {
            query_string[key] = decodeURIComponent(value);
            // If second entry with this name
          } else if (typeof query_string[key] === "string") {
            var arr = [query_string[key], decodeURIComponent(value)];
            query_string[key] = arr;
            // If third or later entry with this name
          } else {
            query_string[key].push(decodeURIComponent(value));
          }
        }
        return query_string;
      }


    authorize(){


       function parse_query_string(query) {
            var vars = query.split("&");
            var query_string = {};
            for (var i = 0; i < vars.length; i++) {
              var pair = vars[i].split("=");
              var key = decodeURIComponent(pair[0]);
              var value = decodeURIComponent(pair[1]);
              // If first entry with this name
              if (typeof query_string[key] === "undefined") {
                query_string[key] = decodeURIComponent(value);
                // If second entry with this name
              } else if (typeof query_string[key] === "string") {
                var arr = [query_string[key], decodeURIComponent(value)];
                query_string[key] = arr;
                // If third or later entry with this name
              } else {
                query_string[key].push(decodeURIComponent(value));
              }
            }
            return query_string;
          }
            // Optionally the request above could also be done as
            axios.get('http://ec2-35-176-218-20.eu-west-2.compute.amazonaws.com/authorize', {
                params: {
                    response_type: "id_token token",
                    client_id:"641bb8db-98b3-47bb-8707-b86b6b5cf3df",
                    scope:"openid ia",
                    request:"eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiUlNBLU9BRVAtMjU2Iiwia2lkIjoidHBBbks3Z1JDVWszMlBDbEFoTW5CcHNJYXIwPSIsImN0eSI6IkpXVCJ9.Oh64OU6BxHYgJ1rTIkuLgRh0BFia6IvrV4eK_fuzh7tebRdY69pXB-tIhGD8W2DQgAUjdg1CSbW1TnSM7Zq1mZCCuAJCTrzjJG382bo4noKwEnjjJfphmte5kaaYkN2kHZ2Lmq0FV-0S2GXHMdgA-Q43DFgYEhIdzMc_ak8WQhYgDiH8jizb-6JLHu3nd0uZ8dUe5A9uGNPxclcYeSAWqShu7swb6qpXCsbmOnYFE0pZIMJQSDJUeQMkR4cOu_gTMGj-A15RrrIlvF-wde_F4zBUl5xHMP2gq8Cz98lN68142fWmN7Lo_6ZUufHv0lvcRUCUGHm7-0vQ6i-sMNhgjA.tCyinItOUXfim9GsPd8Kfg.J4LHtu04h1QtvZTwEDjH4__tXRnRtjdH9z7VV6B-r85hJgRAYSrQYkWn2aEdbOebyv4teU8H78eVhCZdXiMbTi_5D4oOaFRQdbycG-ufHKy8jp2FAZrgfAn3D6pXp8YJv01ByX-3rL-JxCfsmHCTpKT17v14TyLFIvDU7aTGXkaWuNn_lJX9d5pYY-7PU2_5_v-32LRFgJCjzs_Ve0s578vS0-RBqlTLLmLTypDdwjliqoKFvm2KGwfAsffvq6u-ZsP-bLmahj8fpFT1FZi9Y5G8Z1_Grtf0KUbqE5f5h-7Vg9S4qW-i6IX8AKP8fwSO_IkEsrUInmT8fyCEDouo19WTqPYe8ib2CaxC5YUae6pmzdu0GK79n5jCKu68r7gfa78ufxB3NqVAMQ1d3BEHZYX9tmH0RdnJe66HEmxTaVnQKM4OnGCDH8fLXpuO7iQgx0uadTFhuRxZ1f4qOW4M6HVQyD-JC6aOe75FSy6nwyEqCZPp6qq0d9zK82KxxqNnMvITQo3UeYDo45u5a18pUYH5It9tn4Aazo2Hs-JIeUFzDC2aiqhtTLo1nN1CvseFg2gROm5_MWiclpUWhbazH_TL1q1mPyKnW5JuaNwxkqxikm_kJTVdMQCQzkgdyg4h1owXy_giMC0qkrpgvHzL_uKn7kJmzOxjRYaOwhHA7a8lqDzi_UBmIaugPCQbUTCJkzPbLKWULf2Px6dxIUbco1S-8Q8JSt_vBmytB2yl_tr0yyhtqoWdWpgHWV8jq2yyrx9AJzgnpqjs0LzDo3eNTgJJS1aIPhpc14Kzdz_HHOr80CtHPELGrGVt7OOQMeLQXDDfQV9qt5SHNStMcLrhxVkj2bQ-u1gjtxJkeQwHPK7H-Yv-Uuu_JQwla-7cQmoXPR8jRAi-nrbfG7Va11-wgouXYNFkgFFuZaoJ3ZZNVclDddO7Dn0Fbv8k2EiBCR6_G2LJ-chvE9O8C7_Fls820jXR7pDAOyq8FVzMjR6Pa9ZQi7TpndqA-yOvbSDeTXdGQKHGTC3F0qvZCsgR-JOCGRai3G8MThZPoAIuPdiu8O0kQXfWYBHCZS4ApL_H6vlrkiiiTay25UiXeBysJ07qX2fBbXKDJrZXS8TC1y2Fl-6UnFyELjp-v0Yaf4zi5Dee.iJ1o0O098bC6tbhv0p2Nag",
                    redirect_uri:"http://ec2-3-8-216-174.eu-west-2.compute.amazonaws.com/cb",

                },
                headers:{
                    redirect_uri:"http://ec2-3-8-216-174.eu-west-2.compute.amazonaws.com/cb",
                }
            })
                .then(function (response) {
                    console.log(response.status);
                    console.log(response);

                    let url = response.request.responseURL;
                    let access_token_string=url.split("?")[1];
                    const query_string = parse_query_string(access_token_string);
                    console.log(query_string);
                    let envName = query_string["access_token"];
                    console.log(envName);


                })
                .catch(function (error) {
                    console.log(error.response);
                    //const params = (error.response.request.responseURL).search.substring(1);
                    let url = error.response.request.responseURL;
                    let access_token_string=url.split("?")[1];
                    const query_string = parse_query_string(access_token_string);
                    console.log(query_string);
                    let envName = query_string["access_token"];
                    console.log(envName);

                })
                .then(function () {
                    // always executed

                });
    }

    render() {
        return (
            <div>
             <button onClick={this.authorize}>
                 Call Authorize
             </button>
             </div>

        );
    }

}

export default Authorize;