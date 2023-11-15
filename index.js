import "./index.css"
// import { cards, message, request, profile, highline } from "@/js/database"

import { profile } from './data/db.json'

import {
    // NavBar
    navbar_container_logo,
    navbar_container_create_img,
    // Main
    left,
    left_profile,
    left_sidebar,
    left_sidebar_post_btn,
} from "@/js/common"

/* NAV */
navbar_container_logo.textContent = "Topsocial";
navbar_container_create_img.src = profile.img_src;

/* LEFT */
left.appendChild(left_profile);
left.appendChild(left_sidebar);
left.appendChild(left_sidebar_post_btn);