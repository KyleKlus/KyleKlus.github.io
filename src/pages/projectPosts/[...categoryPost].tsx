/** @format */

import fs from 'fs';
import matter from 'gray-matter';
import MarkdownSection from '@/components/markdown/MarkdownSection';
import Markdown from 'markdown-to-jsx';


import Head from 'next/head';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Content from '@/components/container/Content';

import Main from '@/components/container/Main';

import headerStyles from '@/styles/components/header/Header.module.css'

import ScrollNavLink from '@/components/links/ScrollNavLink';
import dynamic from 'next/dynamic';

import { GetStaticPropsContext } from 'next/types';
import IProjectPost from '@/interfaces/IProjectPost';

import styles from '@/styles/components/ProjectPost.module.css'
import MarkdownImage from '@/components/markdown/MarkdownImage';
import { useEffect, useState } from 'react';
import { NoSsr } from '@/components/NoSsr';
import Layout from '@/components/layouts/Layout';

const ThemeButton = dynamic(() => import('@/components/buttons/ThemeButton'), {
    ssr: false,
});


export default function MarkdownPostListTemplate(props: { post: IProjectPost }) {
    const useClientCheck = () => {
        const [isClient, setIsClient] = useState(false);
        useEffect(() => { setIsClient(true) }, []); return isClient
    }
    return (
        <>
            <Layout title={'Kyle Klus | ' + props.post.title + ' 🛠️'}>
                <Content className={['applyHeaderOffset', styles.projectPost].join(' ')}>
                    <Markdown options={{
                        wrapper: MarkdownSection,
                        overrides: {
                            img: {
                                component: MarkdownImage,
                            },
                        },
                        forceWrapper: true
                    }}>
                        {
                            props.post.content
                        }
                    </Markdown>
                </Content>
            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    // variables
    const serverFolder = 'public/projectPostFiles/'
    const delimiter = '---'

    // get markdown files
    const filenames = fs.readdirSync(serverFolder).filter(file => file.endsWith('.md'))

    // Convert markdown files into posts
    const postsUrls: string[] = filenames.map((filename) => {
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
        return url
    })


    return {
        paths: postsUrls,
        fallback: false
    }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {

    // variables
    const serverFolder = 'public/projectPostFiles/'
    const delimiter = '---'

    // get markdown files
    if (!params || !params.categoryPost) return { props: {} };

    let paths = params.categoryPost.toString().split(',')

    const filename = paths[paths.length - 1] + '.md'
    let url = '/' + paths.join('/')
    const filepath = `${serverFolder}/${filename}`
    let fileContent = fs.readFileSync(filepath, 'utf-8').toString();
    const frontmatter = matter(fileContent).data
    const startOfFrontmatter = fileContent.indexOf(delimiter)
    const endOfFrontmatter = fileContent.indexOf(delimiter, startOfFrontmatter + delimiter.length) + delimiter.length
    fileContent = fileContent.substring(endOfFrontmatter, fileContent.length)

    let categoriesString: string = frontmatter.categories
    const categories: string[] = categoriesString.split(' ')
    url = `/projectPosts/${categories.join('/')}` + url

    console.log(url)

    // Convert markdown files into posts
    const post: IProjectPost = {
        filename: filename,
        filepath: filepath,
        url: url,
        title: frontmatter.title,
        author: frontmatter.author,
        categories: categories,
        created: frontmatter.created,
        content: fileContent,
    }


    return {
        props: {
            post: post,
        }
    }
}
