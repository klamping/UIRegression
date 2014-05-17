# Starter Book

This project contains a few book pages, to help get you started.

If you have cloned this project, you may replace this README with your own (you can always refer back to [the original](https://github.com/bitbooks/starter-book/blob/master/README.md)). Otherwise, this README will explain how a book repository works, with Bitbooks.

## What goes in this book repository?

Three things:

1. The front page (`index.md`)
2. Additional pages (`xxxxxxxx.md`)
3. Images (`images/`)

Let's look more closely at each one:

1. There **must** be a page named `index.md`, which will be used to make the front page of your book. Each additional page is represented by a separate `.md` file and can be named whatever you please.

2. Each page (including the front page) should begin with a heading (represented in markdown by `# Title`). This heading will be used to lable the page in the book's table of contents. If you do not have a heading on the page, Bitbooks will use the filename to generate this information.

3. If you want to put images in your book, we recommend that you upload your images to an `images` folder for referencing within your book's pages. An example of how to do this can be found on the [first page](1-first-page.md).

### Writing with Markdown?

**The content of all pages should be written in Markdown.**

Markdown is a simple format for writing on the web. Markdown content is written with a text editor and saved as files named like `filename.md` (or alternatively `filename.markdown`). If you are unfamiliar with markdown, here are some [basic instructions for getting started](https://help.github.com/articles/markdown-basics). Bitbooks uses [Github Flavored Markdown](https://help.github.com/articles/github-flavored-markdown), as its standard.

## Directory Structure

Bitbooks makes very few assumptions about how your repository should be structured. You can create a flat list of markdown files, or you can choose to use directories to organize your book content, (see our [example book](https://github.com/bitbooks/example-book) for, well, an example).

The structure of your Bitbooks site will mimic the structure of this repository, with two exceptions:

1. Your front page (`index.md`) will be promoted to the top of the list.
2. Your readme (`readme.md`) and images folder will not appear in your table of contents.

Here are a few example directory structures, with the resulting impact on book navigation and urls:

![Example Directory Structures](images/example-directories.png)

You may have noticed that page order is defined by alphebetical sorting of the filename. For this reason, we usually recommend prepending filenames with numbers for sorting purposes. Finally, if you have any non-markdown files in your repository (meaning, files not ending with `.md` or `.markdown`), they will not appear on the site.
