"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "constants/blend_mode.js"));
const baseUri = "image.png";

//////////////////////You can EDIT these below///////////////////////////
/////No need to erase these comments
  const namess = "My NFT"; ///// name of your nft
  const symbol = "SYM"; ///symbol of your nft
  const description = "Your description";
  const seller_fee_basis_points = "250"; ///royalties
  const image = "image.png";
  const animation_url = "your url"; ///not needed if there's no animation
  const external_url = "your url";


const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color" },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid" },
      { name: "Top lid" },
    ],
  },
];
const collection = {
  "name": "Mi Colección",
  "family": "Mi Familia" 
};
const properties = {
    "files": [
      {
        "uri": "image.png",
        "type": "image/png"
      }
    ],
    "category": "image",
    "creators": [
      {
        "address": "Your sol address",
        "share": 100 ////the percentage you'll receive
      }
    ]
  };
/////////////////////You have finished editing the metadata///////////////////
const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};


const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  namess,
  symbol,
  description,
  image,
  seller_fee_basis_points,
  animation_url,
  external_url,
  format,
  baseUri,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  properties,
  collection,
  pixelFormat,
  text,
};
