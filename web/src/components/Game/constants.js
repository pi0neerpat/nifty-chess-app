import rdaiABI from "./rdai.json";

const CONTRACTS = {
  dai: {
    abi: rdaiABI,
    kovan: "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa",
    homestead: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
  },
  rdai: {
    abi: rdaiABI,
    kovan: "0x462303f77a3f17Dbd95eb7bab412FE4937F9B9CB",
    homestead: "0x261b45D85cCFeAbb11F022eBa346ee8D1cd488c0"
  },
  ydai: {
    abi: rdaiABI,
    // kovan: "0x462303f77a3f17Dbd95eb7bab412FE4937F9B9CB",
    homestead: "0xACd43E627e64355f1861cEC6d3a6688B31a6F952"
  }
};
export default CONTRACTS;
