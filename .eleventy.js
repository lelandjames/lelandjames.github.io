import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'assets': 'assets',
    'robots.txt': 'robots.txt',
  });
  eleventyConfig.addGlobalData('site', {
    title: 'blank', // Set to 'blank' to use first_name and last_name
    first_name: 'Leland',
    last_name: 'James'
  });
  eleventyConfig.setIncludesDirectory('_includes');
  eleventyConfig.setLayoutsDirectory('_layouts');
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
  eleventyConfig.addCollection("galleryItems", function (collectionApi) {
    return collectionApi.getAll()
      .filter(page => page.data.galleryOrder)
      .sort((a, b) => a.data.galleryOrder - b.data.galleryOrder);
  });
};
