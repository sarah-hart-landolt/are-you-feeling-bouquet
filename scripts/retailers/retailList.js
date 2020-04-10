import { useRetailers } from "./retailerProvider.js"
import { Retailer } from "./retailer.js"
import { useDistributors } from "../distributors/distributorProvider.js"
import { useDistributorNurseries } from "../relationships/DistributorNurseriesProvider.js"
import { useNursuries } from "../nursuries/nurseryProvider.js"
import { useNurseryFlowers } from "../relationships/NursuryFlowersProvider.js"
import { useFlowers } from "../flowers/flowerProvider.js"

const contentTarget = document.querySelector(".retailersContainer")

const render = retailersToRender => {

    const distributors = useDistributors()
    const distributorNurseries= useDistributorNurseries()
    const nurseries = useNursuries()
    const nurseryFlowers= useNurseryFlowers()
    const flowers = useFlowers()

    contentTarget.innerHTML = retailersToRender.map(
        (retailerObject) => {
        const foundDistributor = distributors.find(
                (distributor) => {
                    return distributor.id === retailerObject.distributerId})
        
        const distributorNurseriesFiltered = distributorNurseries.filter(
         (distributorNursery => distributorNursery.distributorId === foundDistributor.id))

        const Nurseries = distributorNurseriesFiltered.map(distributorNursery => {
            return nurseries.find(nursery => nursery.id === distributorNursery.nurseryId)})
        
        const nurseryFlowersRelationships= Nurseries.map(nursery => {
            return nurseryFlowers.find(nurseryFlower=> nurseryFlower.nurseryId === nursery.id)})
        
        const Flowers = nurseryFlowersRelationships.filter(
                (nurseryFlowersRelationship => nurseryFlowersRelationship.flowerId === flowers.id))
        
            return Retailer(retailerObject, foundDistributor, Nurseries, Flowers)
        }
    ).join("")
}

export const RetailerList = () => {
    const retailers = useRetailers()
    render(retailers)
}
