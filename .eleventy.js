import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'assets': 'assets',
    'robots.txt': 'robots.txt',
  });
  eleventyConfig.addGlobalData('site_title', 'Leland James');
  eleventyConfig.addGlobalData('first_name', 'Leland');
  eleventyConfig.addGlobalData('last_name', 'James');
  eleventyConfig.setIncludesDirectory('_includes');
  eleventyConfig.setLayoutsDirectory('_layouts');
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

};
