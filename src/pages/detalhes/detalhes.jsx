import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./Detalhes.css";

import img1 from "../../assets/batman.png";
import img2 from "../../assets/capacete.png";
import img3 from "../../assets/CarroBatman.png";

export default function Detalhes() {
  const { id } = useParams();

}
