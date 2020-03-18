"use strict";
import { gsap } from "gsap";

gsap.to(".ball", { x: 400, duration: 2, rotate: 200 });
gsap.to(".ball", { delay: 2, scale: 0, y: 35 })