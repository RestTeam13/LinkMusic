const sharp = require('sharp')

function createSVG(width, height, text, hslColor) {
    let textHtml = ``
    for (let i = 0; i < text.length; i++) {
        const nearColor = `hsla(${hslColor + getRandomNearColor()}, 25%, ${50 + getRandomNearColor()}%, 1)`,
            randomSize = Math.random() * 20 + 30,
            randomWeight = allFontWeights[Math.floor(Math.random() * allFontWeights.length)],
            dy = Math.floor((Math.random() * 2 - 1) * 3)
        textHtml += `
      <style>
      .title-${i} { fill: ${nearColor}; font-size: ${randomSize}px; font-weight: ${randomWeight};}
      </style>
      <tspan class="title-${i}" dx="-10" dy="${dy}">${text[i]}</tspan>`
    }


    return `
 <svg width="${width}" height="${height}">
       <style>
      tspan {font-style: italic; margin-left: -10px;}
      </style>
      <text x="50%" y="70%" text-anchor="middle">${textHtml}</text>
 </svg>
`
}

function getRandomNearColor() {
    const offset = 3 + Math.floor(Math.random() * 3),
        minus = Math.floor(Math.random() * 2 - 1) || 1

    return offset * minus
}

const allTexts = [
        'музыка',
        'скрипка',
        'баян',
        'хор',
        'бас',
        'минор',
        'мажор',
        'фагот',
        'флейта',
        'гитара',
        'диск',
        'праздник',
        'событие',
        'банкет',
        'фуршет',
        'тайминг',
        'сценарий',
        'пластинка',
        'выступление',
        'букинг',
        'артист',
        'балет',
        'музыканты',
        'менеджмент',
        'вокал',
        'ударные',
        'винил',
        'микрофон',
        'сцена',
        'звук',
        'свет',
        'экран',
        'соло',
        'альт'
    ],
    allFontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900],
    width = 241,
    height = 46


module.exports={
    async createImg() {
        let base64img = 'data:image/png;base64,'

        const text = allTexts[Math.floor(Math.random() * allTexts.length)],
            hslColor = Math.floor(Math.random() * 360)
        const svgText = createSVG(width, height, text, hslColor)
        const svgBuffer = Buffer.from(svgText)

        const imgData = await sharp({
            create: {
                width: width,
                height: height,
                channels: 3,
                background: `hsla(${hslColor}, 25%, 50%, 1)`
            }
        })
            .composite([{
                input: svgBuffer,
                top: 0,
                left: 0
            }])
            .toFormat('png')
            .toBuffer()
            .then(data => data.toString('base64'))
            .catch(e => console.log(e))

        return base64img + imgData
    }
}
