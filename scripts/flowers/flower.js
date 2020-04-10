export const Flower = (flowerObject) => {
    return `
        <div class="flower">
            <header class="flower__name">
                <h2>${flowerObject.name}</h2>
            </header>
            <section class="flower__color">
                <div>Color: ${flowerObject.color}</div>
            </section>
        </div>
    `  
}