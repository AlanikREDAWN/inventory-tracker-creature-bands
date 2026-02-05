export async function addValue(parsedData) {
    const octopusResult = parsedData.octopusResult
    const braceletResult = parsedData.braceletResult
    const mushroomResult = parsedData.mushroomResult
    const stickerResult = parsedData.stickerResult
    // console.log(octopusResult)

    var octopusPriceTotal = 0 
    var braceletPriceTotal = 0
    var mushroomPriceTotal = 0
    var stickerPriceTotal = 0
    var chickenPriceTotal = 0
    var stingrayPriceTotal = 0
    var turtlePriceTotal = 0
    var footballPriceTotal = 0

    var octopusAmountTotal = 0
    var braceletAmountTotal = 0
    var mushroomAmountTotal = 0
    var stickerAmountTotal = 0
    var chickenAmountTotal = 0
    var stingrayAmountTotal = 0
    var turtleAmountTotal = 0
    var footballAmountTotal = 0

    var octopusTotal = 0
    var braceletTotal = 0
    var mushroomTotal = 0
    var stickerTotal = 0 
    var chickenTotal = 0
    var stingrayTotal = 0
    var turtleTotal = 0
    var footballTotal = 0


    for (let i = 0; i < octopusResult.length; i++) {
        octopusPriceTotal += parseFloat(octopusResult[i].price.replace(/[^0-9.]/g, ''))
        octopusAmountTotal += parseFloat(octopusResult[i].amount)

        octopusTotal = octopusPriceTotal * octopusAmountTotal
        
        // console.log(octopusAmountTotal)
        // console.log(parseFloat(octopusResult[i].price.replace(/[^0-9.]/g, '')))
        // console.log(octopusTotal)
    }
    for (let i = 0; i < braceletResult.length; i++) {
        braceletPriceTotal += parseFloat(braceletResult[i].price.replace(/[^0-9.]/g, ''))
        braceletAmountTotal += parseFloat(braceletResult[i].amount)

        braceletTotal = braceletPriceTotal * braceletAmountTotal
        // console.log(braceletTotal)
    }
    for (let i = 0; i < mushroomResult.length; i++) {
        mushroomPriceTotal += parseFloat(mushroomResult[i].price.replace(/[^0-9.]/g, ''))
        mushroomAmountTotal += parseFloat(mushroomResult[i].amount)

        mushroomTotal = mushroomPriceTotal * mushroomAmountTotal
        // console.log(mushroomTotal)
    }
    for (let i = 0; i < stickerResult.length; i++) {
        stickerPriceTotal += parseFloat(stickerResult[i].price.replace(/[^0-9.]/g, ''))
        stickerAmountTotal += parseFloat(stickerResult[i].amount)

        stickerTotal = stickerPriceTotal * stickerAmountTotal
        // console.log(stickerTotal)
    }

    const total = octopusTotal + braceletTotal + mushroomTotal + stickerTotal
    return total
}