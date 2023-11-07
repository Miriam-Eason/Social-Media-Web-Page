import { create_profile, Profile } from "@/js/components/profiles.js";
import { profile } from "/data/db.json";

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
const left_profile_info = new Profile(profile.img_src, profile.name, profile.at);
console.log(left_profile_info);
export const left_profile = left_profile_info.build();

// const profileInfo = new Profile(profile.img_src, profile.name, profile.at);
// export const left_profile = create_profile(profile.img_src, profile.name, profile.at);
// export const left_profile = left.querySelector('.profile');
// export const left_profile_img = left_profile.querySelector('img');
// export const left_profile_name = left_profile.querySelector('h2');
// export const left_profile_at = left.querySelector('p');


/* Main Middle */


/* Create News */


/* Create Profile */


/* Create Picture */


/* Create Control */


/* Create Comment */


/* Main Right */