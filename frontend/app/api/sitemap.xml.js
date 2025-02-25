import { SitemapStream, streamToPromise } from 'sitemap'

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    })

    // List all your dynamic pages here
    const pages = [
      { url: '/', changefreq: 'daily', priority: 1 },
      { url: '/services', changefreq: 'weekly', priority: 0.8 },
      { url: '/reviews', changefreq: 'daily', priority: 0.7 },
      { url: '/contact', changefreq: 'monthly', priority: 0.5 },
    ]

    for (const page of pages) {
      smStream.write(page)
    }

    smStream.end()

    const sitemapOutput = (await streamToPromise(smStream)).toString()

    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })
    res.end(sitemapOutput)
  } catch (e) {
    console.log(e)
    res.send(JSON.stringify(e))
  }
}