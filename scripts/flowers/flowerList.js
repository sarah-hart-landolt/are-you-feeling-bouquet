import { useFlowers } from "./flowerProvider.js"
import { Flower } from "./flower.js"

const contentTarget = document.querySelector(".flowersContainer")

const render = flowersToRender => {

    contentTarget.innerHTML = flowersToRender.map(
        (flowerObject) => {
            return Flower(flowerObject)
        }
    ).join("")
}

export const FlowerList = () => {
    const flowers = useFlowers()
    render(flowers)
}
