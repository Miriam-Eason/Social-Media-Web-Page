// Left
import { Profile } from "@/js/components/mainLeft/profiles.js";
import { Sidebar } from "@/js/components/mainLeft/sidebar";
import { create_post } from "@/js/components/mainLeft/createPostBtn";

// Middle
import { HighLine } from "@/js/components/mainMiddle/highline";
import { create_simple_post } from "@/js/components/mainMiddle/createPost";
import { CardList } from "@/js/components/mainMiddle/cardList";

// Right
import {create_message} from "@/js/components/mainRight/message";
import { friendList } from "@/js/components/mainRight/friendList";
import { RequestList } from "@/js/components/mainRight/requestList";


// Data
import { profile, sidebar, highline, message, request, cards } from "/data/db.json";

/* NavBar */
export const navbar = document.querySelector('nav');
export const navbar_container = navbar.querySelector('.container');
export const navbar_container_logo = navbar_container.querySelector('.logo');
export const navbar_container_searchBar = navbar_container.querySelector('.search-bar');
export const navbar_container_create = navbar_container.querySelector('.create');
export const navbar_container_create_img = navbar_container.querySelector('img');


/* Main */
export const main = document.querySelector('main');
export const main_container = main.querySelector('.container');

/* Main Left */
export const left = main_container.querySelector('.main-left');
export const left_profile = new Profile(profile.img_src, profile.name, profile.at).build();
export const left_sidebar = new Sidebar(sidebar).build();
export const left_sidebar_post_btn = new create_post();

/* Main Middle */
export const middle = main_container.querySelector('.main-middle');
export const middle_highline = new HighLine(highline).build();
export const middle_create_post = create_simple_post(profile);
export const middle_card_list = new CardList(cards).build();
//
// const highline_info = new HighLine(highline);
// highline_info.build();
// console.log(highline_info.dom);

/* Main Right */
export const right =main_container.querySelector('.main-right');
export const right_message = create_message();
export const right_friends = new friendList(message).build();
export const right_request = new RequestList(request).build();