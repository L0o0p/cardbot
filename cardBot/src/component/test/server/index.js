import puppeteer from 'puppeteer';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // 引入 cors 中间件

const app = express();
const PORT = 3000;

app.use(cors()); // 使用 cors 中间件
app.use(bodyParser.json());

app.post('/scrape', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        page.on('console', msg => console.log('PAGE LOG:', msg.text()));
        await page.goto(url, { timeout: 1000 * 10, waitUntil: 'networkidle0' });

        const texts = await page.evaluate(() => {
            console.log('running');
            const extractedTexts = [];
            const elements = document.querySelectorAll('a, p, h1, h2, h3, h4, h5, h6');
            elements.forEach(element => {
                if (element.innerText) {
                    extractedTexts.push(element.innerText);
                }
            });
            return extractedTexts;
        });

        console.log('texts', texts);
        await browser.close();
        res.json({ texts: Array.from(new Set(texts)) });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});