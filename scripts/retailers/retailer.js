export const Retailer = (retalierObject, distributorObject, nurseriesArray, Flowers) => {
    return `
        <div class="retailer">
            <header class="retalier__name">
                <h2>${retalierObject.name}</h2>
            </header>
            <section class="retailer__location">
                <div>Address: ${retalierObject.address}</div>
            </section>
            <section class="distributor__info">
                <div>Distributor: ${distributorObject.name}</div>
            </section>
            <section class="nursery__info">
                <div>Nursuries: </div>
                     <ul>${
                        nurseriesArray.map(nursery=> {
                        return `<li>${nursery.name}</li>`}
                        ).join(" ")
                    }
                    </ul>
            </section "flowers__info">
                <div>Flowers: </div>
            <ul>${
                  Flowers.map(flower=> {
                      return `<li>${flower.name}</li>`}
                      ).join(" ")
                  }
              </ul>
          </section>
        </div>
    `  
}