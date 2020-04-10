import { FlowerList } from "./flowers/flowerList.js";
import { getFlowers } from "./flowers/flowerProvider.js";
import { getRetailers } from "./retailers/retailerProvider.js";
import { RetailerList } from "./retailers/retailList.js";
import { getDistributors } from "./distributors/distributorProvider.js";
import { getNursuries } from "./nursuries/nurseryProvider.js";
import { getDistributorNurseries } from "./relationships/DistributorNurseriesProvider.js";
import { getNurseryFlowers } from "./relationships/NursuryFlowersProvider.js";


getFlowers()
    .then(FlowerList)

getRetailers()
    .then(getDistributors)
    .then(getDistributorNurseries)
    .then(getNursuries)
    .then (getNurseryFlowers)
    .then (getFlowers)
    .then(RetailerList)