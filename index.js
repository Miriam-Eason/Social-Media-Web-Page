import "./index.css"
// import { cards, message, request, profile, highline } from "@/js/database"

import { profile } from './data/db.json'

import {
    // NavBar
    navbar_container_logo,
    navbar_container_create_img,
    // Main
    // Left
    // left_profile_img,
    // left_profile_name,
    // left_profile_at,
    left,
    left_profile,
} from "@/js/common"

/* NAV */
navbar_container_logo.textContent = "Topsocial";
navbar_container_create_img.src = profile.img_src;

/* LEFT */
left.appendChild(left_profile);
console.log(left);
console.log(left_profile);
// left_profile_img.src = profile.img_src;
// left_profile_name.textContent = profile.name;
// left_profile_at.textContent = profile.at;

/* MIDDLE */

/* FORM */

/* HIGHLINE */

/* CARD */

/* Message */

/* Request */
