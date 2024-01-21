/** @format */
import fs from 'fs';
import matter from 'gray-matter';


import Head from 'next/head';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Main from '@/components/container/Main';
import Content from '@/components/container/Content';
import Text from '@/components/container/Text';
import ScrollNavLink from '@/components/links/ScrollNavLink';
import headerStyles from '@/styles/components/header/Header.module.css';
import dynamic from 'next/dynamic';
import IProjectPost from '@/interfaces/IProjectPost';
import Card from '@/components/container/Card';
import Link from 'next/link';

import styles from '@/styles/pages/ProjectPage.module.css'
import IProjectCategory from '@/interfaces/IProjectCategory';
import Layout from '@/components/layouts/Layout';

const ThemeButton = dynamic(() => import('@/components/buttons/ThemeButton'), {
  ssr: false,
});
export default function Home(props: { posts: IProjectPost[], postCategories: string[] }) {
  function makeFirstLetterUppercase(name: string) {
    const nameLetters: string[] = []
    nameLetters.push(name[0].toUpperCase())

    for (let i = 1; i < name.length; i++) {
      nameLetters.push(name[i]);
    }
    return nameLetters.join('')
  }

  return (
    <>
      <Layout title={'Kyle Klus | Projects 🛠️'}>
        <Content className={[styles.projectIndex, 'applyHeaderOffset'].join(' ')}>
          <Text>
            <h1>Kyle&apos;s Projects 🛠️</h1>
            {props.postCategories.map((category, i) => {
              const categoryPosts = props.posts.filter(post => post.categories.filter(postCategory => postCategory === category).length !== 0)

              return (
                <div key={i}>
                  <h2>{makeFirstLetterUppercase(category)}</h2>
                  {categoryPosts.length !== 0 && categoryPosts.map((post, j) => {

                    return (
                      <Card key={j} className={[styles.entry].join(' ')}>
                        <Link className={[styles.entryLink].join(' ')} href={post.url}>{makeFirstLetterUppercase(post.title)}</Link>
                        <p className={[styles.entryInfo].join(' ')}>{post.created + ' | ' + post.categories.join(' | ')}</p>
                      </Card>
                    )
                  })}
                </div>
              )
            })}
          </Text>
        </Content>
      </Layout>
    </>
  );
}


export async function getStaticProps() {
  // variables
  const serverFolder = 'public/projectPostFiles/'
  const delimiter = '---'

  // get markdown files
  const filenames = fs.readdirSync(serverFolder).filter(file => file.endsWith('.md'))

  // Convert markdown files into posts
  const posts: IProjectPost[] = filenames.map((filename) => {
    let url = filename.replace('.md', '')
    url = '/' + url
    const filepath = `${serverFolder}${filename}`
    let fileContent = fs.readFileSync(filepath, 'utf-8').toString();
    const frontmatter = matter(fileContent).data
    const startOfFrontmatter = fileContent.indexOf(delimiter)
    const endOfFrontmatter = fileContent.indexOf(delimiter, startOfFrontmatter + delimiter.length) + delimiter.length
    fileContent = fileContent.substring(endOfFrontmatter, fileContent.length)

    let categoriesString: string = frontmatter.categories
    const categories: string[] = categoriesString.split(' ')
    url = `/projectPosts/${categories.join('/')}` + url

    return {
      filename: filename,
      filepath: filepath,
      url: url,
      title: frontmatter.title,
      author: frontmatter.author,
      categories: categories,
      created: frontmatter.created,
      content: fileContent,
    }
  })
  const categorizedPosts: IProjectCategory[] = [];

  posts.forEach(post => {
    const visitedCategoryTrace: IProjectCategory[] = [];

    post.categories.forEach((category, index) => {
      if (category === 'moc') { return }

      if (visitedCategoryTrace.length === 0) {
        const filteredCategory = categorizedPosts.filter(e => e.title === category)
        const postsInCategory = []
        if (index === post.categories.length - 1) { postsInCategory.push(post) }

        if (filteredCategory.length === 0) {
          categorizedPosts.push({
            title: category,
            url: `/projectPosts/${category}`,
            otherCategories: [],
            posts: postsInCategory
          })

          visitedCategoryTrace.push(categorizedPosts[categorizedPosts.length - 1])
        } else {
          if (postsInCategory.length !== 0) { filteredCategory[0].posts.push(postsInCategory[0]) }

          visitedCategoryTrace.push(filteredCategory[0])
        }
      } else {
        const lastVisitedCategory = visitedCategoryTrace[visitedCategoryTrace.length - 1]
        const filteredCategory = lastVisitedCategory.otherCategories.filter(e => e.title === category)
        const postsInCategory = []
        if (index === post.categories.length - 1) { postsInCategory.push(post) }

        if (filteredCategory.length === 0) {

          lastVisitedCategory.otherCategories.push({
            title: category,
            url: `/projectPosts/${visitedCategoryTrace.map(e => e.title).join('/')}/${category}`,
            otherCategories: [],
            posts: postsInCategory
          })

          visitedCategoryTrace.push(lastVisitedCategory.otherCategories[lastVisitedCategory.otherCategories.length - 1])
        } else {
          if (postsInCategory.length !== 0) { filteredCategory[0].posts.push(postsInCategory[0]) }

          visitedCategoryTrace.push(filteredCategory[0])
        }
      }
    })
  })

  return {
    props: {
      posts: posts,
      postCategories: categorizedPosts.map(e => e.title),
    }
  }
}
