import { Profile } from "@/js/components/mainLeft/profiles.js";
import {Sidebar} from "@/js/components/mainLeft/sidebar";
import {create_post} from "@/js/components/mainLeft/createPostBtn";
import { HighLine } from "@/js/components/mainMiddle/highline";
import { profile, sidebar, highline } from "/data/db.json";

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

/* Create News */


/* Create Profile */


/* Create Picture */


/* Create Control */


/* Create Comment */


/* Main Right */