const puppeteer = require('puppeteer');

async function scrapProduct(url){
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    await page.goto(url);

    /*const imgList = await page.evaluate(() => {
        const nodeList = document.querySelectorAll('#main-image-container img');

        const imgArray = [...nodeList];

        const imgList = imgArray.map(img => ({src : img.src}));

        return imgList
    });*/

    const el = await page.$('#main-image-container img');
    const src = await el.getProperty('src');
    const imgsrc = await src.jsonValue();  
    
    const el2 = await page.$('#price span');
    const obj = await el2.getProperty('textContent');
    const txt = await obj.jsonValue();
    const price = await txt.replace(/\n/g, '');

    const title = await page.title();

    browser.close();
    console.log({title, imgsrc, price});

    return({title, imgsrc, price});
}

module.exports = scrapProduct;

