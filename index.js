import "./index.css"
// import { cards, message, request, profile, highline } from "@/js/database"

import { profile } from './data/db.json'

import {
    // NavBar
    navbar_container_logo,
    navbar_container_create_img,
    // Main

    // Main Left
    left,
    left_profile,
    left_sidebar,
    left_sidebar_post_btn,

    // Main Middle
    middle,
    middle_highline,
    middle_create_post,

    // Main Right
    right,
    right_message,
    right_friends,
    right_request,

} from "@/js/common"

/* NAV */
navbar_container_logo.textContent = "Topsocial";
navbar_container_create_img.src = profile.img_src;

/* LEFT */
left.appendChild(left_profile);
left.appendChild(left_sidebar);
left.appendChild(left_sidebar_post_btn);

/* MIDDLE */
middle.appendChild(middle_highline);
middle.appendChild(middle_create_post);

/* Right */
right.appendChild(right_message);
right_message.appendChild(right_friends);
right.appendChild(right_request);