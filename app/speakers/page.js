"use client";
import Image from "next/image";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const bannerStyles = {
  backgroundImage: "url('/assets/r2.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  textAlign: "center",
  padding: "50px 10px",
  width: "100%",
};
export default function Speakers() {
  const data = [
    {
      type: "Ministerial Speakers",
      img: "/assets/p1.png",
      title: "Speaker",
      name: "Johnathan N. Killip 1",
      bio: "Economy Scientist - Infulencer",
    },
    {
      type: "Strategic Conference Speakers",
      img: "/assets/p1.png",
      title: "Speaker",
      name: "Johnathan N. Killip",
      bio: "Economy Scientist - Infulencer",
    },
    {
      type: "Strategic Conference Speakers",
      img: "/assets/p2.png",
      title: "Speaker",
      name: "Johnathan N. Killip",
      bio: "Economy Scientist - Infulencer",
    },
    {
      type: "Hydrogen Strategic Speakers",
      img: "/assets/p1.png",
      title: "Speaker",
      name: "Johnathan N. Killip",
      bio: "Economy Scientist - Infulencer",
    },
    {
      type: "Hydrogen Strategic Speakers",
      img: "/assets/p2.png",
      title: "Speaker",
      name: "Johnathan N. Killip",
      bio: "Economy Scientist - Infulencer",
    },
    {
      type: "Hydrogen Strategic Speakers",
      img: "/assets/p3.png",
      title: "Speaker",
      name: "Johnathan N. Killip",
      bio: "Economy Scientist - Infulencer",
    },
    {
      type: "Hydrogen Strategic Speakers",
      img: "/assets/p4.png",
      title: "Speaker",
      name: "Johnathan N. Killip",
      bio: "Economy Scientist - Infulencer",
    },
    {
      type: "Hydrogen Strategic Speakers",
      img: "/assets/p4.png",
      title: "Speaker",
      name: "Johnathan N. Killip",
      bio: "Economy Scientist - Infulencer",
    },
    {
      type: "Hydrogen Strategic Speakers",
      img: "/assets/p5.png",
      title: "Speaker",
      name: "Johnathan N. Killip",
      bio: "Economy Scientist - Infulencer",
    },
    {
      type: "Decarbonisation Conference Speakers",
      img: "/assets/p1.png",
      title: "Speaker",
      name: "Johnathan N. Killip",
      bio: "Economy Scientist - Infulencer",
    },
    {
      type: "Decarbonisation Conference Speakers",
      img: "/assets/p2.png",
      title: "Speaker",
      name: "Johnathan N. Killip",
      bio: "Economy Scientist - Infulencer",
    },
    {
      type: "Decarbonisation Conference Speakers",
      img: "/assets/p2.png",
      title: "Speaker",
      name: "Johnathan N. Killip",
      bio: "Economy Scientist - Infulencer",
    },
    {
      type: "Technical Conference Speakers",
      img: "/assets/p1.png",
      title: "Speaker",
      name: "Johnathan N. Killip",
      bio: "Economy Scientist - Infulencer",
    },
    {
      type: "Technical Conference Speakers",
      img: "/assets/p2.png",
      title: "Speaker",
      name: "Johnathan N. Killip",
      bio: "Economy Scientist - Infulencer",
    },
  ];

  // const data = [
  //   {
  //     type: "Ministerial Speakers",
  //     img: "/assets/p1.png",
  //     title: "Speaker",
  //     name: "H.E Salim Al Aufi",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Strategic Conference Speakers",
  //     img: "/assets/p1.png",
  //     title: "Speaker",
  //     name: "H. E Mohsin Al Hadhrami",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Strategic Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Alaa Joudi ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Hydrogen Strategic Speakers",
  //     img: "/assets/p1.png",
  //     title: "Speaker",
  //     name: "Dr. Abdullah Al-Abri",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Hydrogen Strategic Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Dr. Firas Al Abduwani ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Hydrogen Strategic Speakers",
  //     img: "/assets/p3.png",
  //     title: "Speaker",
  //     name: "Abdulaziz Al Shidhany ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Hydrogen Strategic Speakers",
  //     img: "/assets/p4.png",
  //     title: "Speaker",
  //     name: "Dr. Ahmed Al Abri  ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Hydrogen Strategic Speakers",
  //     img: "/assets/p4.png",
  //     title: "Speaker",
  //     name: "Najla Al Jamali ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Hydrogen Strategic Speakers",
  //     img: "/assets/p5.png",
  //     title: "Speaker",
  //     name: "Adithya Bhashyam ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Decarbonisation Conference Speakers",
  //     img: "/assets/p1.png",
  //     title: "Speaker",
  //     name: "Susana Moreira",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Decarbonisation Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "David Hone",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Decarbonisation Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "ASHWANI DUDEJA ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p1.png",
  //     title: "Speaker",
  //     name: "Francois Dao",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Dr. Hans D. Hermes",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Anne-Sophie Corbeau	     ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Dawud Ansari 	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Muhannad Al Hinai	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Noé van Hulst	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "ILARIA CONTI	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Andrei Covatariu	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Stefan Krümpelmann	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Maria Trinidad Navarro	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Akio kusakabe	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Oliver Phillips	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Jean Louis Morcos	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Bertrand Chupin	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Javier Doblas	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Monica Trench	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "David Edmondson	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Secil Torun	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Tony Nieman	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Mark Geilenkirchen	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Paula Naofal ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Dr. Khalil Al Hanashi	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "H. E Mohsin Al Hadhrami   ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Guy De Kort	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Kimberly D. Harrington ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Saif Al Hosni",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Malcolm Cook",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Reggy Vermeulen",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Naveen Ahlawat  ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Zahir Al Omairi       ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Tom Hautekiet  ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "HE Khamis Al Shamakhi	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Dr. Jürgen Guldner	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Stuart Neil	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Dr. Alessandro Zampieri  ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Ronald Grasman	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Kenji Yoshimura	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Sarabeth Brockley 	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Allan Baker      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Joanna Mobed	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Kenny Kitamura	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Hanife Ymer	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Alwaleed Al-Shukaili	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Dr. Sebastian Stiebel	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Karim Badawi	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Omar Shkeir	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Reverant Crispin	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Stephen Austin      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Thomas Wylie     ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Nahla Abid	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Rabih Baroud	 ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Faiez Sallie	    ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Claudio Fecarotta	      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Ellen Ruhotas  ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Dr. ABDULRAHMAN BABORAIK		      ",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Devon Hyver	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Rajesh Malhotra	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Austin Uzoka	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Philippe Lavagna	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Ahad Al Ghaithi",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Ksenia Eliseeva	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Agnel Cheruvathoor 	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Rajesh Malhotra	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Steffen Zendler	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Arnes Biogradlija	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Azzan Al Yaarubi	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Helton Bezerra	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Ahmed Al Hatrooshi	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Khadija Al Balushi	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Khalid Oumejjoud	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "karel Borovec	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Bora Aydin	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Mayank Dave	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Joseph Nkrumah	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Michael Czarnecki	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Pierluigi Vicini	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Syed Babu	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Cornelia Müller-Pagel	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Carlo Terragni",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Mariya Al Subhi	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Dr. Malik Sajawal Akhtar	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Vitthal Sawant	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Shaji John	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Pinkamol Reangdet	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  //   {
  //     type: "Technical Conference Speakers",
  //     img: "/assets/p2.png",
  //     title: "Speaker",
  //     name: "Mazin Al Habsi	",
  //     bio: "Economy Scientist - Infulencer",
  //   },
  // ];

  const [speakers, setSpeakers] = useState(data);
  const [filterValue, setFilterValue] = useState("");
  const [filterCheckBox, setFilterCheckbox] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFilter = () => {
    setLoading(true);
    let filteredData = data;
    console.log(filterCheckBox, filterValue)
    if (filterValue) {
      filteredData = filteredData.filter((item) => item.name === filterValue);
    }

    if (filterCheckBox) {
      filteredData = filteredData.filter(
        (item) => item.type === filterCheckBox
      );
    }
    setLoading(false);
    setSpeakers(filteredData);
  };
  const onReset = () => {
    setFilterValue("");
    setFilterCheckbox("");
    setSpeakers(data);
  };

  return (
    <div className="py-20 bg-[#f8f8f8]">
      <div style={bannerStyles}>
        <div className="text-3xl font-bold">Speakers</div>
      </div>

      <section className="flex flex-col md:flex-row justify-center items-start gap-5 px-5 md:px-10 pt-10">
        <div className="hidden md:block w-full md:w-[30%] bg-white">
          <SpeakerFilterBox
            isShadow={true}
            setFilterValue={setFilterValue}
            filterValue={filterValue}
            filterCheckBox={filterCheckBox}
            setFilterCheckbox={setFilterCheckbox}
            handleFilter={handleFilter}
            onReset={onReset}
          />
        </div>
        <div className="block md:hidden w-full">
          <AlertDialog className="w-full">
            <AlertDialogTrigger className="flex justify-between items-center w-full">
              <div className="flex justify-start items-center my-3 border border-gray-300 rounded-md p-2 w-[80%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#818C93]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="search"
                  className="ml-2 w-full px- outline-none bg-inherit"
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                />
              </div>
              <div className="inline-flex justify-end items-center w-[20%]">
                <p class="text-md text-[#AE0243] cursor-pointer">Filter</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 text-[#AE0243] cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                  />
                </svg>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-80 p-0">
              <AlertDialogHeader>
                <AlertDialogCancel className="border-none shadow-none inline-flex justify-end items-center hover:bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </AlertDialogCancel>
                <SpeakerFilterBox
                  setFilterValue={setFilterValue}
                  filterValue={filterValue}
                  filterCheckBox={filterCheckBox}
                  setFilterCheckbox={setFilterCheckbox}
                  handleFilter={handleFilter}
                  onReset={onReset}
                />
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="w-full md:w-[70%]">
          {/* <div className="flex justify-between items-center py-2">
            <h1 className="text-md md:text-xl font-bold">Green Hydrogen Summit</h1>
            <p>
              <Link href="" className="text-[10px] font-semibold underline">
                View Event Details →
              </Link>
            </p>
          </div> */}
          {/* <hr /> */}
          <div className="my-5 flex justify-center items-center flex-col">
            {/* <Image src="/assets/a2.png" width={100} height={100} /> */}
            {speakers.filter((item) => item.type === "Ministerial Speakers")
              .length > 0 && (
              <>
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-2">
                  {speakers
                    .filter((item) => item.type === "Ministerial Speakers")
                    .map((item, index) => (
                      <Dialog>
                        <DialogTrigger>
                          <div
                            className="flex flex-col md:flex-row justify-start items-center gap-2 rounded-md my-2 p-5 min-w-[300px] md:min-w-full"
                            style={{
                              boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.1)",
                            }}
                            key={index}
                          >
                            <div>
                              <Image
                                src={item.img}
                                alt="profile"
                                width={100}
                                height={100}
                              />
                            </div>
                            <div>
                              <p className="text-[10px] font-semibold">
                                {item.title}
                              </p>
                              <h1 className="text-[14px] font-bold">
                                {item.name}
                              </h1>
                              <p className="text-[9px] font-semibold">
                                {item.bio}
                              </p>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogDescription>
                              <DialogBox />
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    ))}
                </div>
                <div className="w-full h-[1px] bg-[#8B8B8B] my-5"></div>
              </>
            )}

            {speakers.filter(
              (item) => item.type === "Strategic Conference Speakers"
            ).length > 0 && (
              <>
                <Image src="/assets/a1.png" width={100} height={100} />
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-2">
                  {speakers
                    .filter(
                      (item) => item.type === "Strategic Conference Speakers"
                    )
                    .map((item, index) => (
                      <Dialog>
                        <DialogTrigger>
                          <div
                            className="flex flex-col md:flex-row justify-start items-center gap-2 rounded-md my-2 p-5 min-w-[300px] md:min-w-full"
                            style={{
                              boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.1)",
                            }}
                            key={index}
                          >
                            <div>
                              <Image
                                src={item.img}
                                alt="profile"
                                width={100}
                                height={100}
                              />
                            </div>
                            <div>
                              <p className="text-[10px] font-semibold">
                                {item.title}
                              </p>
                              <h1 className="text-[14px] font-bold">
                                {item.name}
                              </h1>
                              <p className="text-[9px] font-semibold">
                                {item.bio}
                              </p>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogDescription>
                              <DialogBox />
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    ))}
                </div>

                <div className="w-full h-[1px] bg-[#8B8B8B] my-5"></div>
              </>
            )}

            {speakers.filter(
              (item) => item.type === "Hydrogen Strategic Speakers"
            ).length > 0 && (
              <>
                <Image src="/assets/a3.png" width={100} height={100} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-2">
                  {speakers
                    .filter(
                      (item) => item.type === "Hydrogen Strategic Speakers"
                    )
                    .map((item, index) => (
                      <Dialog>
                        <DialogTrigger>
                          <div
                            className="flex flex-col md:flex-row justify-start items-center gap-2 rounded-md my-2 p-5 min-w-[300px] md:min-w-full"
                            style={{
                              boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.1)",
                            }}
                            key={index}
                          >
                            <div>
                              <Image
                                src={item.img}
                                alt="profile"
                                width={100}
                                height={100}
                              />
                            </div>
                            <div>
                              <p className="text-[10px] font-semibold">
                                {item.title}
                              </p>
                              <h1 className="text-[14px] font-bold">
                                {item.name}
                              </h1>
                              <p className="text-[9px] font-semibold">
                                {item.bio}
                              </p>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogDescription>
                              <DialogBox />
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    ))}
                </div>

                <div className="w-full h-[1px] bg-[#8B8B8B] my-5"></div>
              </>
            )}

            {speakers.filter(
              (item) => item.type === "Decarbonisation Conference Speakers"
            ).length > 0 && (
              <>
                <Image src="/assets/a4.png" width={100} height={100} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-2">
                  {speakers
                    .filter(
                      (item) =>
                        item.type === "Decarbonisation Conference Speakers"
                    )
                    .map((item, index) => (
                      <Dialog>
                        <DialogTrigger>
                          <div
                            className="flex flex-col md:flex-row justify-start items-center gap-2 rounded-md my-2 p-5 min-w-[300px] md:min-w-full"
                            style={{
                              boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.1)",
                            }}
                            key={index}
                          >
                            <div>
                              <Image
                                src={item.img}
                                alt="profile"
                                width={100}
                                height={100}
                              />
                            </div>
                            <div>
                              <p className="text-[10px] font-semibold">
                                {item.title}
                              </p>
                              <h1 className="text-[14px] font-bold">
                                {item.name}
                              </h1>
                              <p className="text-[9px] font-semibold">
                                {item.bio}
                              </p>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogDescription>
                              <DialogBox />
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    ))}
                </div>

                <div className="w-full h-[1px] bg-[#8B8B8B] my-5"></div>
              </>
            )}

            {speakers.filter(
              (item) => item.type === "Technical Conference Speakers"
            ).length > 0 && (
              <>
                <Image src="/assets/a2.png" width={100} height={100} />
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-2">
                  {speakers
                    .filter(
                      (item) => item.type === "Technical Conference Speakers"
                    )
                    .map((item, index) => (
                      <Dialog>
                        <DialogTrigger>
                          <div
                            className="flex flex-col md:flex-row justify-start items-center gap-2 rounded-md my-2 p-5 min-w-[300px] md:min-w-full"
                            style={{
                              boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.1)",
                            }}
                            key={index}
                          >
                            <div>
                              <Image
                                src={item.img}
                                alt="profile"
                                width={100}
                                height={100}
                              />
                            </div>
                            <div>
                              <p className="text-[10px] font-semibold">
                                {item.title}
                              </p>
                              <h1 className="text-[14px] font-bold">
                                {item.name}
                              </h1>
                              <p className="text-[9px] font-semibold">
                                {item.bio}
                              </p>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogDescription>
                              <DialogBox />
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    ))}
                </div>

                <div className="w-full h-[1px] bg-[#8B8B8B]"></div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

const SpeakerFilterBox = ({
  isShadow,
  filterValue,
  setFilterValue,
  setFilterCheckbox,
  handleFilter,
  onReset,
}) => {
  return (
    <div
      className="p-5"
      style={{
        boxShadow: isShadow ? "0px 4px 18px 5px rgba(0, 0, 0, 0.1)" : "",
      }}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-sm font-bold">Refine the list</h1>
        <div className="flex justify-start items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 text-[#AE0243] cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 text-[#AE0243] cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-start items-center my-3 border border-gray-300 rounded-md p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-[#818C93]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="search"
          className="ml-2 w-full px- outline-none"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </div>
      <hr />
      <div className="my-2">
        <h1 className="text-sm font-bold">Filter</h1>
        <div className="flex justify-between items-center my-3">
          <h1 className="text-sm font-bold text-[#AE0243]">Speaker Category</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 text-[#AE0243] cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div>
          <ul>
            <li className="flex justify-start items-center gap-2 my-1">
              <input type="checkbox" value="Ministerial Speakers"
                onChange={(e) => setFilterCheckbox(e.target.value)} />
              <p className="text-sm text-[#555555]">Ministerial Speakers</p>
            </li>
            <li className="flex justify-start items-center gap-2 my-1">
              <input type="checkbox" value="Strategic Conference Speakers"
                onChange={(e) => setFilterCheckbox(e.target.value)} />
              <p className="text-sm text-[#555555]">
                Strategic Conference Speakers
              </p>
            </li>
            <li className="flex justify-start items-center gap-2 my-1">
              <input type="checkbox" value="Hydrogen Strategic Speakers"
                onChange={(e) => setFilterCheckbox(e.target.value)} />
              <p className="text-sm text-[#555555]">
                Hydrogen Strategic Speakers
              </p>
            </li>
            <li className="flex justify-start items-center gap-2 my-1">
              <input type="checkbox" value="Decarbonisation Conference Speakers"
                onChange={(e) => setFilterCheckbox(e.target.value)} />
              <p className="text-sm text-[#555555]">
                Decarbonisation Conference Speakers
              </p>
            </li>
            <li className="flex justify-start items-center gap-2 my-1">
              <input type="checkbox" value="Technical Conference Speakers"
                onChange={(e) => setFilterCheckbox(e.target.value)} />
              <p className="text-sm text-[#555555]">
                Technical Conference Speakers
              </p>
            </li>
            <li className="flex justify-start items-center gap-2 my-1">
              <input type="checkbox" value="ADNOC Trading Forum Speakers"
                onChange={(e) => setFilterCheckbox(e.target.value)} />
              <p className="text-sm text-[#555555]">
                ADNOC Trading Forum Speakers
              </p>
            </li>
          </ul>
          <div className="flex justify-center items-center gap-2 my-2">
            <button
              type="button"
              onClick={onReset}
              className="w-full md:w-[168px] h-[39px] text-[#6B7280] text-[12px] rounded-md"
              style={{ border: "1px solid rgba(202, 219, 220, 1)" }}
            >
              Clear All
            </button>
            <button
              type="button"
              onClick={handleFilter}
              className="w-full md:w-[168px] h-[39px] bg-[#003756] text-[12px] text-white rounded-md"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DialogBox = () => {
  return (
    <div className="flex flex-col md:flex-row justify-centers md:justify-start items-center md:items-start gap-5">
      <div>
        <Image src="/assets/p1.png" width={100} height={100} />
        <Image src="/assets/a1.png" width={100} height={100} className="my-3" />
      </div>
      <div className="w-full inline-flex justify-start items-center md:items-start flex-col">
        <div>
          <p className="text-[10px] font-semibold text-black md:text-left">
            Speaker
          </p>
          <h1 className="text-[14px] font-bold text-black">
            Johnathan N. Killip
          </h1>
          <p className="text-[9px] font-semibold text-black mb-3">
            Economy Scientist - Infulencer
          </p>
        </div>
        <div className="w-full h-[1px] bg-black"></div>
        <p className="text-[14px] font-bold text-left mt-3">Is speaking at</p>
        <p className="text-[14px] font-bold text-[#003756]">
          The event and session name
        </p>
        <ul className="flex justify-start items-start flex-col">
          <li className="text-[10px] text-gray-600 inline-flex justify-start items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p>Muscat Exhibition, Ghala, Muscat, Oman</p>
          </li>
          <li className="text-[10px] text-gray-600 inline-flex justify-start items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
            <p>Closing on December 11, 2023</p>
          </li>
          <li className="text-[10px] text-gray-600 inline-flex justify-start items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>10:30AM - 11:30AM GMT</p>
          </li>
        </ul>
        <p className="text-[14px] font-bold text-[#003756]">
          The event and session name
        </p>
        <ul className="flex justify-start items-start flex-col">
          <li className="text-[10px] text-gray-600 inline-flex justify-start items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p>Muscat Exhibition, Ghala, Muscat, Oman</p>
          </li>
          <li className="text-[10px] text-gray-600 inline-flex justify-start items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
            <p>Closing on December 11, 2023</p>
          </li>
          <li className="text-[10px] text-gray-600 inline-flex justify-start items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>10:30AM - 11:30AM GMT</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
